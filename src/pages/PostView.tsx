import { useParams } from 'react-router-dom';
import { postsData } from '../data/postsData';

const PostView = () => {
  const { id } = useParams();
  const post = postsData.find(p => p.id === Number(id));

  if (!post) {
    return (
      <div className="min-h-screen bg-black p-8 w-full">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold text-white">Post not found</h1>
        </div>
      </div>
    );
  }

  const renderContent = (content: string) => {
    const parts = content.split('```');
    return parts.map((part, index) => {
      if (index % 2 === 1) {
        return (
          <pre key={index} className="bg-gray-800 p-4 rounded-lg my-4 overflow-x-auto">
            <code className="text-sm text-gray-200">{part}</code>
          </pre>
        );
      } else {
        return part.split('\n').map((paragraph, pIndex) => (
          <p key={`${index}-${pIndex}`} className="mb-4 text-gray-300 leading-relaxed">
            {paragraph.trim()}
          </p>
        ));
      }
    });
  };

  return (
    <div className="min-h-screen bg-black w-full">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-[400px] object-cover rounded-xl"
          />
        </div>
        
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 text-white">{post.title}</h1>
          
          <div className="flex items-center mb-6">
            <img 
              src={post.author.image} 
              alt={post.author.name}
              className="w-12 h-12 rounded-full object-cover mr-4"
            />
            <div>
              <p className="font-medium text-white">{post.author.name}</p>
              <p className="text-sm text-gray-400">{post.date} · {post.readTime}</p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag, index) => (
              <span 
                key={index}
                className="text-sm px-3 py-1 bg-gray-800 rounded-full text-white"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <div className="article-content prose prose-invert max-w-none">
            {renderContent(post.content)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostView;