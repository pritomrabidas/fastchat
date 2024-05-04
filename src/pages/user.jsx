import { CiEdit } from "react-icons/ci";
import { MdMarkEmailRead } from "react-icons/md";
import { useSelector } from "react-redux";
import { useState, createRef } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

const User = () => {
  const user = useSelector((state)=> state.userSlice.user)
  const [image, setImage] = useState(  "https://raw.githubusercontent.com/roadmanfong/react-cropper/master/example/img/child.jpg");
  const [cropData, setCropData] = useState("#");
  const cropperRef = createRef();
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
    }}
    console.log(cropData);
  return (
    <div className=" mx-auto w-80 h-screen overflow-scroll ">
      <div className="justify-center shadow-xl rounded-lg overflow-hidden my-20">
        <div className=" py-3 px-4">
        <input type="file" onChange={onChange} />
        <Cropper
          ref={cropperRef}
          style={{ height: 400, width: "100%" }}
          zoomTo={0.5}
          initialAspectRatio={1}
          preview=".img-preview"
          src={image}
          viewMode={1}
          minCropBoxHeight={10}
          minCropBoxWidth={10}
          background={false}
          responsive={true}
          autoCropArea={1}
          checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
          guides={true}
        />
        <button className=" p-4 bg-slate-800 rounded-lg my-5 text-white" onClick={getCropData}>
              Crop 
            </button>
        <img  src={cropData} alt="cropped" />
        </div>
        <img
          className="w-full h-56  object-cover object-center"
          src={user.photoURL}
          alt="avatar"
        />
        <div className="flex items-center px-6 py-3 bg-gray-900">
          <h1 className="mx-3 text-white font-semibold text-lg">{user.displayName}</h1>
        </div>
        <div className="py-4 px-6">
          <div className="flex items-center mt-4 text-gray-700">
            <CiEdit/>
            <h1 className="px-2 text-sm">Bio</h1>
          </div>
          <div className="flex items-center mt-4 text-gray-700">
            <MdMarkEmailRead/>
            <h1 className="px-2 text-sm">{user.email}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
