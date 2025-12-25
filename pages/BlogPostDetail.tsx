
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Calendar, User, Tag, Phone, ArrowLeft } from 'lucide-react';
import { BlogPost } from '../types';
import { DISPLAY_PHONE } from '../constants';

interface BlogPostDetailProps {
  blogs: BlogPost[];
}

const BlogPostDetail: React.FC<BlogPostDetailProps> = ({ blogs }) => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogs.find(b => b.slug === slug);

  if (!post) return <Navigate to="/blog" />;

  return (
    <div className="bg-white pb-20">
      <div className="max-w-4xl mx-auto px-4 pt-10">
        <Link to="/blog" className="flex items-center space-x-2 text-avira-orange font-bold mb-10 hover:translate-x-[-4px] transition-transform">
          <ArrowLeft size={20} />
          <span>Back to Blog</span>
        </Link>

        <header className="mb-10">
          <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
            <span className="flex items-center space-x-1">
              <Calendar size={14} />
              <span>{post.date}</span>
            </span>
            <span className="flex items-center space-x-1">
              <User size={14} />
              <span>{post.author}</span>
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-avira-blue mb-8 leading-tight">
            {post.title}
          </h1>
          <div className="rounded-3xl overflow-hidden mb-12 shadow-2xl">
            <img src={post.imageUrl} alt={post.title} className="w-full h-auto" />
          </div>
        </header>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed mb-16">
          {post.content.split('\n\n').map((paragraph, i) => (
            <p key={i} className="mb-6">{paragraph}</p>
          ))}
        </div>

        {/* CTA Card */}
        <div className="bg-avira-gray p-10 rounded-3xl border-l-8 border-avira-orange mb-16">
          <h3 className="text-2xl font-bold text-avira-blue mb-4">Need immediate troubleshooting?</h3>
          <p className="text-lg text-gray-600 mb-8">
            Our experts are ready to help you fix any Avira error via remote support or phone guidance. Call our independent support line today.
          </p>
          <a 
            href={`tel:${DISPLAY_PHONE.replace(/[^0-9+]/g, '')}`}
            className="inline-flex items-center space-x-3 bg-avira-blue text-white px-8 py-4 rounded-xl font-bold shadow-xl hover:bg-avira-orange transition-colors"
          >
            <Phone size={24} />
            <span className="text-xl">Call: {DISPLAY_PHONE}</span>
          </a>
        </div>

        <div className="flex flex-wrap gap-3 pt-10 border-t border-gray-100">
          {post.tags.map(tag => (
            <span key={tag} className="bg-gray-100 text-gray-600 px-4 py-1.5 rounded-full text-sm font-medium flex items-center space-x-1">
              <Tag size={14} />
              <span>{tag}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPostDetail;
