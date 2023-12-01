import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { useDropzone } from 'react-dropzone';
import bg1 from "./../assets/images/bgupload1.png";
import bg2 from "./../assets/images/bgupload2.png";
import Navbar from "./Navbar";
import Darkmode from "darkmode-js";
import { setUser } from "../state/user/userSlice";
import { useDispatch } from "react-redux";

function fileSizeValidator(file) {
    if (file.size > 1024 ** 2 * 2) {
      return {
        code: 'size-too-large',
        message: `File is larger than 2mb`,
      };
    }
    return null;
  }

function AudioDetection() {
  const navigate = useNavigate()
  useEffect(() => {
  
    if (window.localStorage.getItem("email") == "x"){
      navigate('/')
    }
    else if (window.localStorage.getItem("email") != "x"){
      if (window.localStorage.getItem("plan") <= Date.now()){
        navigate("/Plans")
        }}
  })
    const [files, setFiles] = React.useState([]);
    const onDrop = React.useCallback((acceptedFiles) => {
        console.log(acceptedFiles);
        setFiles(
          acceptedFiles.map((file) =>
            Object.assign(file, {
              preview: URL.createObjectURL(file),
            })
          )
        );
      }, []);

const {
    fileRejections,
    getRootProps,
    getInputProps,
    isDragActive,
    } = useDropzone({
        onDrop,
        accept: {
            'audio/*': ['.mp3'],
           },
        maxFiles: 1,
        validator: fileSizeValidator,
});
const dispatch = useDispatch();
  const options = {
    bottom: '32px',
    right: '32px',
    left: 'unset',
    time: '0.7s',
    mixColor: '#fff',
    backgroundColor: '#fff',
    buttonColorDark: '#100f2c',
    buttonColorLight: '#fff',
    saveInCookies: true,
    label: '🌓',
    autoMatchOsTheme: true
  }
  const darkmode = new Darkmode(options);
  darkmode.showWidget();
  if(darkmode.isActivated() == true){
    dispatch(setUser({
      email: window.localStorage.getItem("email"),
      plan: window.localStorage.getItem("plan"),
      dark: 1,
    }));
      
    console.log(window.localStorage.getItem("dark"));
  }
return (
    <div><Navbar/><div className='flex'>
        <div 
        className='w-[340px] align-center ml-20 my-20 md:mx-20 md:my-16 h-[430px] md:h-[430px] lg:h-[485px] bg-contain' style={{ backgroundImage:`url(${bg1})` }} {...getRootProps({
  role: 'button'
})}>
            <input {...getInputProps()} />
            {files.map(f => {
    <img src={f.preview} />
  })}
            {isDragActive ? (
                            <p className="text-center fontFamily: Roboto pt-48 md:pt-40 lg:pt-48 w-64 md:w-72 px-5 lg:w-64 lg:ml-11 md:ml-0 ml-11 text-lg">Drop your media files here.</p>
                            ) : (
                            <p className="text-center fontFamily: Roboto pt-48 md:pt-40 lg:pt-48 w-64 md:w-72 px-5 lg:w-64 lg:ml-11 md:ml-0 ml-11 text-lg">Drag and drop some files here, or click to select files.</p>
                            )
            }
        </div>
        <div className='invisible md:visible lg:h-[305px] lg:mx-32 my-40 bg-contain w-[550px]' style={{ backgroundImage:`url(${bg2})` }}>
            <p className='font-semibold text-white md:ml-36 md:mt-16 lg:ml-52 lg:mt-20 text-sm lg:text-lg w-32'>Upload Audio</p>
        </div>
    </div>
    {fileRejections.map(({ file, errors }) => {
      <li key={file.path}>
        {file.path} - {file.size} bytes
        <ul>
          {errors.map((e) => (
            <li key={e.code}>{e.message}</li>
          ))}
        </ul>
      </li>
  })}
    </div>
    );
    
}
export default AudioDetection;
