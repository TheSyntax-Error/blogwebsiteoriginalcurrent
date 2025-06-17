import { memo } from 'react';
import { Link } from 'react-router-dom';

interface Author {
  name: string;
  image: string;
  path: string;
}

interface Post {
  id: number;
  title: string;
  image: string;
  readTime: string;
  date: string;
  author: Author;
  tags: string[];
}

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = memo(({ post }) => {
  return (
    <article className="bg-gray-900 rounded-lg overflow-hidden group transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-xl">
      <Link to={`/post/${post.id}`} className="block">
        <div className="relative aspect-[16/9] overflow-hidden">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-3 left-3 right-3">
            <span className="text-sm text-white/90 font-medium">{post.readTime}</span>
          </div>
        </div>
      </Link>
      
      <div className="p-5">
        <Link to={`/post/${post.id}`}>
          <h2 className="text-xl font-semibold mb-3 text-white group-hover:text-gray-300 line-clamp-2">
            {post.title}
          </h2>
        </Link>
        
        <div className="flex items-center mb-4">
          <img 
            src={post.author.image} 
            alt={post.author.name} 
            className="w-8 h-8 rounded-full object-cover mr-3"
            loading="lazy"
          />
          <div>
            <span className="font-medium text-sm text-white">{post.author.name}</span>
            <p className="text-xs text-gray-400">{post.date}</p>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {post.tags.slice(0, 3).map((tag, index) => (
            <Link 
              key={index} 
              to={`/category/${tag.toLowerCase()}`} 
              className="text-xs px-2 py-1 bg-gray-800 hover:bg-gray-700 rounded-full transition text-gray-300"
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
});

PostCard.displayName = 'PostCard';

export default PostCard;