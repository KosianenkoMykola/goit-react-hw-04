import css from './LoadMoreBtn.module.css';

export default function LoadMoreBtn({onClick}) {
    return(
        <div className={css.btnContainer}>
            <button type="button" onClick={onClick} className={css.loadMoreBtn}>Load More</button>
        </div>
    )
}