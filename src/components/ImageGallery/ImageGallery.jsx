import ImageCard from "./ImageCard/ImageCard";
// import css from "./ImageCard/ImageCard.module.css"

export default function ImageGallery({images, onImageClick}){
    return(
        <ul>
            {images.map((image) => (
            <li key={image.id}>
                <ImageCard image={image} onClick={() => onImageClick(image)} />
            </li>
            ))}
      </ul>
    )
}