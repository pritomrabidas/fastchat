import { CiEdit } from "react-icons/ci";
import { MdMarkEmailRead } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useState, createRef } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import { GiSplitCross } from "react-icons/gi";
import { getStorage, ref, uploadString } from "firebase/storage";
import { getDownloadURL } from "firebase/storage";
import { getAuth, onAuthStateChanged, updateProfile } from "firebase/auth";
import { getDatabase, ref as dref, set } from "firebase/database";
import { loggeducer } from "../slice/userSlice";

const User = () => {
  const user = useSelector((state) => state.userSlice.user);
  const [image, setImage] = useState("");
  const [cropData, setCropData] = useState("");
  const [enableEdit, setEnableEdit] = useState(false);
  const [loading, setLoading] = useState(false);
  const cropperRef = createRef();
  const storage = getStorage();
  const auth = getAuth();
  const db = getDatabase();
  const disptch = useDispatch();

  const onChange = (e) => {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(files[0]);
  };
  const getCropData = () => {
    if (typeof cropperRef.current?.cropper !== "undefined") {
      setCropData(cropperRef.current?.cropper.getCroppedCanvas().toDataURL());
    }
  };
  const HandleClose = () => {
    setEnableEdit(false);
    setCropData("");
    setImage("");
  };
  const HandleUpload = () => {
    setLoading(true);
    if (cropData) {
      const storageRef = ref(storage, user?.uid);
      uploadString(storageRef, cropData, "data_url").then(() => {
        getDownloadURL(storageRef).then((downloadURL) => {
          onAuthStateChanged(auth, () => {
            updateProfile(auth.currentUser, {
              photoURL: downloadURL,
            }).then(() => {
              set(dref(db, "users/" + user.uid), {
                email: user.email,
                profile_picture: downloadURL,
                username: user.displayName,
              });
              localStorage.setItem("user", JSON.stringify(auth.currentUser));
              disptch(loggeducer(auth.currentUser));
              setEnableEdit(false);
              setCropData("");
              setImage("");
            });
          });
        });
      });
    }
  };
  return (
    <div className="flex overflow-scroll gap-5 w-full pt-10 relative">
      <div className=" w-[400px] h-[430px]">
        <div className="justify-center shadow-xl rounded-lg overflow-hidden">
          <div className=" py-3 px-4"></div>
          <img
            className="w-full h-56  object-cover object-center"
            src={user?.photoURL}
            alt="avatar"
          />
          <div className="flex items-center justify-between px-6 py-3 bg-gray-900">
            <h1 className="mx-3 text-white font-semibold text-lg">
              {user?.displayName}
            </h1>
            <>
              <div className="hs-dropdown relative inline-flex">
                <button className="hs-dropdown-toggle flex justify-center items-center size-9 text-sm font-semibold rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
                  <BsThreeDotsVertical className="text-black" />
                </button>
                <div className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden bg-black shadow-md rounded-lg p-2 mt-2">
                  <p
                    onClick={() => setEnableEdit(true)}
                    className="flex items-center gap-x-3.5 py-2 px-2 ab rounded-lg text-sm text-gray-100 hover:bg-gray-900 focus:inline-none focus:bg-gray-100"
                    href="#"
                  >
                    Edit Profile
                  </p>
                </div>
              </div>
            </>
          </div>
          <div className="py-4 px-6">
            <div className="flex items-center mt-4 text-gray-700">
              <CiEdit />
              <h1 className="px-2 text-sm">Bio</h1>
            </div>
            <div className="flex items-center mt-4 text-gray-700">
              <MdMarkEmailRead />
              <h1 className="px-2 text-sm">{user?.email}</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className=" w-96 h-96">
          {enableEdit && (
            <>
              <label
                htmlFor="Profile"
                className=" bg-gray-600 px-4 py-2 text-white rounded-md"
              >
                Chose your Profile Picture
                <input
                  type="file"
                  id="Profile"
                  className="hidden"
                  onChange={onChange}
                />
              </label>
              {image && (
                <div className=" absolute left-0 top-0 w-full h-screen bg-[rgba(0,0,0,1)] border rounded flex">
                  <div className=" w-[800px] h-[450px] pt-24">
                    <Cropper
                      ref={cropperRef}
                      style={{ height: 400, width: "100%" }}
                      zoomTo={0.5}
                      initialAspectRatio={1}
                      preview=".img-preview"
                      src={image}
                      viewMode={1}
                      minCropBoxHeight={4}
                      minCropBoxWidth={4}
                      background={false}
                      responsive={true}
                      autoCropArea={1}
                      checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
                      guides={true}
                    />
                    <div className="flex w-60 justify-center mx-auto">
                      {cropData &&
                        (loading ? (
                          <button className=" p-3 bg-slate-800 rounded-lg my-2 text-white mx-auto flex mt-3">
                            <div
                              className="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500"
                              role="status"
                              aria-label="loading"
                            >
                              <span className="sr-only">Loading...</span>
                            </div>
                          </button>
                        ) : (
                          <button
                            onClick={HandleUpload}
                            className=" p-3 bg-slate-800 rounded-lg my-2 text-white mx-auto flex mt-3"
                          >
                            Save
                          </button>
                        ))}
                      <button
                        className=" p-3 bg-slate-800 rounded-lg my-2 text-white mx-auto flex mt-3"
                        onClick={getCropData}
                      >
                        Crop
                      </button>
                      <button
                        onClick={HandleClose}
                        className=" p-3 bg-slate-800 rounded-lg my-2 text-white mx-auto flex mt-3"
                      >
                        <GiSplitCross />
                      </button>
                    </div>
                  </div>
                  <div className=" pt-40">
                    <img className=" w-40 h-40" src={cropData} alt="cropped" />
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default User;
