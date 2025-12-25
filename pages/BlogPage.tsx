
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, Tag, ArrowRight } from 'lucide-react';
import { BlogPost } from '../types';

interface BlogPageProps {
  blogs: BlogPost[];
}

const BlogPage: React.FC<BlogPageProps> = ({ blogs }) => {
  return (
    <div className="bg-gray-50 pb-20">
      <section className="bg-avira-blue py-20 text-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Security & Troubleshooting Blog</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Stay updated with the latest fixes, guides, and security news for Avira users.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((post) => (
            <article key={post.id} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-all group border border-gray-100 flex flex-col">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-avira-orange text-white text-xs font-bold px-2 py-1 rounded">
                  Guide
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center text-xs text-gray-500 mb-4 space-x-4">
                  <span className="flex items-center space-x-1">
                    <Calendar size={12} />
                    <span>{post.date}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <User size={12} />
                    <span>{post.author}</span>
                  </span>
                </div>
                <h2 className="text-xl font-bold text-avira-blue mb-4 group-hover:text-avira-orange transition-colors">
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="text-gray-600 mb-6 flex-grow leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map(tag => (
                    <span key={tag} className="text-[10px] bg-avira-gray text-avira-blue px-2 py-1 rounded-full flex items-center space-x-1">
                      <Tag size={10} />
                      <span>{tag}</span>
                    </span>
                  ))}
                </div>
                <Link 
                  to={`/blog/${post.slug}`} 
                  className="text-avira-orange font-bold flex items-center space-x-2 group-hover:translate-x-2 transition-transform"
                >
                  <span>Read Full Post</span>
                  <ArrowRight size={18} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
