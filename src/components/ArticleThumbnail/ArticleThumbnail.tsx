import './ArticleThumbnail.css'

interface Article {
    title: string;
    content: string;
    image: string;
    createAt: Date;
    isPublished: boolean;
    likeCount: Number;
    categoryName: string;

}

export default function ArticleThumbnail(){
    
    let article: Article = {
        title: 'Titre de l\'article',
        content: 'Voici le contenu de l\'article.',
        image: './src/assets/images/photo.jpeg',
        createAt: new Date('11/02/2025'),
        isPublished: false,
        likeCount: 0,
        categoryName: 'React',
    };

    return (
        <>
            <div className="article">
                <img src={article.image} className='photo'/>
                <p>{article.createAt.toLocaleDateString()}</p>
                <h2>{article.title}</h2>
                <p>{article.content}</p>
            </div>
        </>
    )
}