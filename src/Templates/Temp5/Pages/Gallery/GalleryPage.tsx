import { Footer } from "Templates/Temp5/components/Footer/Footer"
import { NavBar } from "Templates/Temp5/components/NavBar/NavBar"
import { GalleryPost } from "./post"

export const GalleryPage=()=>{
    return (
      <>
        <NavBar />
        <GalleryPost />
        <Footer />
      </>
    );
}