import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img alt={'Photo'}
                 src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNlFMBhvC9cVaxwj3NkH3PGt_4j8k-ttGKuA&usqp=CAU'/>
            <div>
                {props.message}
            </div>
            <div>
                Likes: {props.likesCount}
            </div>
        </div>
    )
}

export default Post;