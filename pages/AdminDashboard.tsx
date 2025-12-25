
import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  FileText, 
  Settings, 
  Plus, 
  Trash2, 
  Edit, 
  LogOut, 
  Search, 
  MessageSquare,
  Wrench,
  Globe,
  Save,
  X
} from 'lucide-react';
import { SiteContent, BlogPost, Service, SEOData } from '../types';

interface AdminDashboardProps {
  content: SiteContent;
  updateSEO: (key: string, data: SEOData) => void;
  addBlog: (blog: BlogPost) => void;
  updateBlog: (blog: BlogPost) => void;
  deleteBlog: (id: string) => void;
  updateService: (service: Service) => void;
  onLogout: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ 
  content, updateSEO, addBlog, updateBlog, deleteBlog, updateService, onLogout 
}) => {
  const [activeTab, setActiveTab] = useState<'blogs' | 'services' | 'seo' | 'contact'>('blogs');
  const [editingBlog, setEditingBlog] = useState<BlogPost | null>(null);
  const [isAddingBlog, setIsAddingBlog] = useState(false);

  // Simple state for forms
  const [blogForm, setBlogForm] = useState<Partial<BlogPost>>({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    author: 'Admin',
    tags: [],
    imageUrl: 'https://picsum.photos/seed/new/800/400'
  });

  const handleBlogSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingBlog) {
      updateBlog({ ...editingBlog, ...blogForm } as BlogPost);
      setEditingBlog(null);
    } else {
      addBlog({
        ...blogForm,
        id: Date.now().toString(),
        date: new Date().toISOString().split('T')[0],
        tags: blogForm.tags || []
      } as BlogPost);
      setIsAddingBlog(false);
    }
    setBlogForm({ title: '', slug: '', excerpt: '', content: '', author: 'Admin', tags: [], imageUrl: '' });
  };

  const handleEditBlog = (blog: BlogPost) => {
    setEditingBlog(blog);
    setBlogForm(blog);
    setIsAddingBlog(true);
  };

  return (
    <div className="flex min-h-[90vh] bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-avira-blue text-white p-6 hidden md:block">
        <h2 className="text-xl font-bold mb-10 flex items-center space-x-2">
          <LayoutDashboard className="text-avira-orange" />
          <span>Admin CMS</span>
        </h2>
        <nav className="space-y-2">
          <button 
            onClick={() => setActiveTab('blogs')}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'blogs' ? 'bg-avira-orange font-bold' : 'hover:bg-blue-900'}`}
          >
            <FileText size={20} />
            <span>Manage Blogs</span>
          </button>
          <button 
            onClick={() => setActiveTab('services')}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'services' ? 'bg-avira-orange font-bold' : 'hover:bg-blue-900'}`}
          >
            <Wrench size={20} />
            <span>Services</span>
          </button>
          <button 
            onClick={() => setActiveTab('seo')}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'seo' ? 'bg-avira-orange font-bold' : 'hover:bg-blue-900'}`}
          >
            <Globe size={20} />
            <span>SEO Settings</span>
          </button>
          <button 
            onClick={() => setActiveTab('contact')}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'contact' ? 'bg-avira-orange font-bold' : 'hover:bg-blue-900'}`}
          >
            <MessageSquare size={20} />
            <span>Inquiries</span>
          </button>
        </nav>
        <button 
          onClick={onLogout}
          className="mt-20 flex items-center space-x-3 px-4 py-3 text-red-300 hover:text-white transition-colors"
        >
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </aside>

      {/* Main Panel */}
      <main className="flex-grow p-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-10">
            <h1 className="text-3xl font-bold text-avira-blue capitalize">{activeTab} Management</h1>
            {activeTab === 'blogs' && (
              <button 
                onClick={() => setIsAddingBlog(true)}
                className="bg-avira-blue text-white px-6 py-2.5 rounded-lg flex items-center space-x-2 font-bold hover:bg-avira-orange transition-colors"
              >
                <Plus size={20} />
                <span>New Post</span>
              </button>
            )}
          </div>

          {activeTab === 'blogs' && (
            <div className="space-y-6">
              {isAddingBlog ? (
                <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-avira-orange/20">
                  <div className="flex justify-between mb-6">
                    <h2 className="text-xl font-bold text-avira-blue">{editingBlog ? 'Edit' : 'Add New'} Blog Post</h2>
                    <button onClick={() => { setIsAddingBlog(false); setEditingBlog(null); }} className="text-gray-400 hover:text-red-500"><X /></button>
                  </div>
                  <form onSubmit={handleBlogSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <input 
                        type="text" placeholder="Title" required 
                        className="p-3 border rounded-lg" 
                        value={blogForm.title} 
                        onChange={e => setBlogForm({...blogForm, title: e.target.value})}
                      />
                      <input 
                        type="text" placeholder="Slug (e.g. fix-avira-now)" required 
                        className="p-3 border rounded-lg" 
                        value={blogForm.slug}
                        onChange={e => setBlogForm({...blogForm, slug: e.target.value})}
                      />
                    </div>
                    <textarea 
                      placeholder="Excerpt" required 
                      className="w-full p-3 border rounded-lg h-24"
                      value={blogForm.excerpt}
                      onChange={e => setBlogForm({...blogForm, excerpt: e.target.value})}
                    />
                    <textarea 
                      placeholder="Full Content (Markdown/HTML supported)" required 
                      className="w-full p-3 border rounded-lg h-64"
                      value={blogForm.content}
                      onChange={e => setBlogForm({...blogForm, content: e.target.value})}
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <input 
                        type="text" placeholder="Image URL" 
                        className="p-3 border rounded-lg"
                        value={blogForm.imageUrl}
                        onChange={e => setBlogForm({...blogForm, imageUrl: e.target.value})}
                      />
                      <input 
                        type="text" placeholder="Tags (comma separated)" 
                        className="p-3 border rounded-lg"
                        value={blogForm.tags?.join(',')}
                        onChange={e => setBlogForm({...blogForm, tags: e.target.value.split(',').map(t => t.trim())})}
                      />
                    </div>
                    <button type="submit" className="bg-avira-blue text-white px-10 py-3 rounded-lg font-bold">Save Post</button>
                  </form>
                </div>
              ) : (
                <div className="bg-white rounded-2xl shadow overflow-hidden">
                  <table className="w-full text-left">
                    <thead className="bg-avira-gray">
                      <tr>
                        <th className="px-6 py-4 font-bold text-avira-blue">Title</th>
                        <th className="px-6 py-4 font-bold text-avira-blue">Date</th>
                        <th className="px-6 py-4 font-bold text-avira-blue">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {content.blogs.map(blog => (
                        <tr key={blog.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 font-medium">{blog.title}</td>
                          <td className="px-6 py-4 text-gray-500 text-sm">{blog.date}</td>
                          <td className="px-6 py-4 flex items-center space-x-4">
                            <button onClick={() => handleEditBlog(blog)} className="text-avira-blue hover:text-avira-orange"><Edit size={18} /></button>
                            <button onClick={() => deleteBlog(blog.id)} className="text-red-500 hover:text-red-700"><Trash2 size={18} /></button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

          {activeTab === 'seo' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Object.entries(content.seo).map(([key, data]) => {
                // Fix: Cast 'data' to 'SEOData' because Object.entries can sometimes infer 'unknown' values.
                const seoData = data as SEOData;
                return (
                  <div key={key} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                    <h3 className="text-xl font-bold text-avira-blue mb-6 capitalize">{key} Page</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1">Meta Title</label>
                        <input 
                          type="text" 
                          value={seoData.title}
                          onChange={(e) => updateSEO(key, { ...seoData, title: e.target.value })}
                          className="w-full p-2 border rounded text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1">Meta Description</label>
                        <textarea 
                          rows={3}
                          value={seoData.description}
                          onChange={(e) => updateSEO(key, { ...seoData, description: e.target.value })}
                          className="w-full p-2 border rounded text-sm resize-none"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {activeTab === 'contact' && (
            <div className="bg-white rounded-2xl shadow overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-avira-gray">
                  <tr>
                    <th className="px-6 py-4 font-bold text-avira-blue">Name</th>
                    <th className="px-6 py-4 font-bold text-avira-blue">Email</th>
                    <th className="px-6 py-4 font-bold text-avira-blue">Message</th>
                    <th className="px-6 py-4 font-bold text-avira-blue">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {content.contactSubmissions.length > 0 ? content.contactSubmissions.map(sub => (
                    <tr key={sub.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">{sub.name}</td>
                      <td className="px-6 py-4 text-sm text-blue-600">{sub.email}</td>
                      <td className="px-6 py-4 text-sm text-gray-600 max-w-md truncate">{sub.message}</td>
                      <td className="px-6 py-4 text-xs text-gray-400">{new Date(sub.timestamp).toLocaleString()}</td>
                    </tr>
                  )) : (
                    <tr>
                      <td colSpan={4} className="px-6 py-20 text-center text-gray-400 italic">No submissions yet.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'services' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {content.services.map(service => (
                <div key={service.id} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold text-avira-blue">Edit Service: {service.title}</h3>
                  </div>
                  <div className="space-y-4">
                    <input 
                      type="text" 
                      className="w-full p-3 border rounded-lg font-bold"
                      value={service.title}
                      onChange={e => updateService({...service, title: e.target.value})}
                    />
                    <textarea 
                      className="w-full p-3 border rounded-lg h-32"
                      value={service.description}
                      onChange={e => updateService({...service, description: e.target.value})}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
