
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { INITIAL_CONTENT, PHONE_NUMBER } from './constants';
import { SiteContent, BlogPost, Service, SEOData, ContactSubmission } from './types';

// Layout Components
import Header from './components/Header';
import Footer from './components/Footer';
import SEOHead from './components/SEOHead';

// Page Components
import Home from './pages/Home';
import About from './pages/About';
import ServicesPage from './pages/ServicesPage';
import BlogPage from './pages/BlogPage';
import BlogPostDetail from './pages/BlogPostDetail';
import Contact from './pages/Contact';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';

const App: React.FC = () => {
  const [content, setContent] = useState<SiteContent>(() => {
    const saved = localStorage.getItem('avira_content');
    return saved ? JSON.parse(saved) : INITIAL_CONTENT;
  });

  const [isAdmin, setIsAdmin] = useState<boolean>(() => {
    return localStorage.getItem('avira_admin_auth') === 'true';
  });

  useEffect(() => {
    localStorage.setItem('avira_content', JSON.stringify(content));
  }, [content]);

  const updateSEO = (key: string, data: SEOData) => {
    setContent(prev => ({
      ...prev,
      seo: { ...prev.seo, [key]: data }
    }));
  };

  const addBlog = (blog: BlogPost) => {
    setContent(prev => ({ ...prev, blogs: [blog, ...prev.blogs] }));
  };

  const updateBlog = (updatedBlog: BlogPost) => {
    setContent(prev => ({
      ...prev,
      blogs: prev.blogs.map(b => b.id === updatedBlog.id ? updatedBlog : b)
    }));
  };

  const deleteBlog = (id: string) => {
    setContent(prev => ({ ...prev, blogs: prev.blogs.filter(b => b.id !== id) }));
  };

  const updateService = (updatedService: Service) => {
    setContent(prev => ({
      ...prev,
      services: prev.services.map(s => s.id === updatedService.id ? updatedService : s)
    }));
  };

  const addContactSubmission = (submission: ContactSubmission) => {
    setContent(prev => ({
      ...prev,
      contactSubmissions: [submission, ...prev.contactSubmissions]
    }));
  };

  const handleLogin = (status: boolean) => {
    setIsAdmin(status);
    localStorage.setItem('avira_admin_auth', String(status));
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header phone={PHONE_NUMBER} />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <SEOHead data={content.seo.home} />
                <Home services={content.services} />
              </>
            } />
            
            <Route path="/about-avira-support-15103701986" element={
              <>
                <SEOHead data={content.seo.about} />
                <About />
              </>
            } />
            
            <Route path="/avira-services-support-15103701986" element={
              <>
                <SEOHead data={content.seo.services} />
                <ServicesPage services={content.services} />
              </>
            } />
            
            <Route path="/blog" element={
              <>
                <SEOHead data={content.seo.blog} />
                <BlogPage blogs={content.blogs} />
              </>
            } />

            <Route path="/blog/:slug" element={<BlogPostDetail blogs={content.blogs} />} />
            
            <Route path="/contact-avira-support-15103701986" element={
              <>
                <SEOHead data={content.seo.contact} />
                <Contact onSubmit={addContactSubmission} />
              </>
            } />

            <Route path="/admin-login" element={
              isAdmin ? <Navigate to="/admin-dashboard" /> : <AdminLogin onLogin={() => handleLogin(true)} />
            } />

            <Route path="/admin-dashboard" element={
              isAdmin ? (
                <AdminDashboard 
                  content={content}
                  updateSEO={updateSEO}
                  addBlog={addBlog}
                  updateBlog={updateBlog}
                  deleteBlog={deleteBlog}
                  updateService={updateService}
                  onLogout={() => handleLogin(false)}
                />
              ) : (
                <Navigate to="/admin-login" />
              )
            } />

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>

        <Footer phone={PHONE_NUMBER} />
      </div>
    </Router>
  );
};

export default App;
