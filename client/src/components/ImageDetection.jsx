import React from 'react';
import { useDropzone } from 'react-dropzone';
import bg1 from "./../assets/images/bgupload1.png";
import bg2 from "./../assets/images/bgupload2.png";
import Navbar from "./Navbar";

function fileSizeValidator(file) {
    if (file.size > 1024 ** 2 * 2) {
      return {
        code: 'size-too-large',
        message: `File is larger than 2mb`,
      };
    }
    return null;
  }

function ImageDetection() {
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
            'image/*': ['.jpeg', '.jpg', '.png'],
           },
        maxFiles: 1,
        validator: fileSizeValidator,
});

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
            <p className='font-semibold text-white md:ml-36 md:mt-16 lg:ml-52 lg:mt-20 text-sm lg:text-lg w-32'>Upload Image</p>
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
export default ImageDetection;
