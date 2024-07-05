import ImageGallery from "../ImageGallery/ImageGallery";
import ImageModal from "../ImageModal/ImageModal";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import SearchBar from "../SearchBar/SearchBar";

export default function App() {
    return(
        <>
        <SearchBar />
        <main>
            <ImageGallery />
            <ImageModal/>
            <LoadMoreBtn/>
        </main>
        </>
    )
}