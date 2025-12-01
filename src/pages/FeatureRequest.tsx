import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Send, Mail, User, Lightbulb, ChevronDown, Users, Tag, AlertCircle, ThumbsUp, Clock, CheckCircle, XCircle, Loader2 } from 'lucide-react';
import SEO from '../components/SEO';

interface FeatureRequestItem {
  id: string;
  role: string;
  category: string;
  priority: string;
  description: string;
  status: string;
  upvotes: number;
  createdAt: string;
}

const FeatureRequest = () => {
  const { t } = useTranslation('featurerequest');
  const [featureRequests, setFeatureRequests] = useState<FeatureRequestItem[]>([]);
  const [isLoadingRequests, setIsLoadingRequests] = useState(true);
  const [votedIds, setVotedIds] = useState<Set<string>>(new Set());
  const [statusFilter, setStatusFilter] = useState('all');
  const [submitted, setSubmitted] = useState(false);

  const formRef = React.useRef<HTMLFormElement>(null);

  const handleFormSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
      // Clear the form
      if (formRef.current) {
        formRef.current.reset();
      }
      // Hide success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 500);
  };

  // Load voted IDs from localStorage
  useEffect(() => {
    const stored = localStorage.getItem('votedFeatureRequests');
    if (stored) {
      setVotedIds(new Set(JSON.parse(stored)));
    }
  }, []);

  // Fetch feature requests on mount (only works after deploying to Netlify)
  useEffect(() => {
    fetchFeatureRequests();
  }, []);

  const fetchFeatureRequests = async () => {
    try {
      const response = await fetch('/.netlify/functions/get-feature-requests');
      // Check if response is actually JSON (not HTML 404 page)
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        console.log('Feature board not available (Netlify functions not running)');
        setIsLoadingRequests(false);
        return;
      }
      const data = await response.json();
      if (data.success) {
        setFeatureRequests(data.requests);
      }
    } catch (error) {
      console.log('Feature board not available locally - will work after deploying to Netlify');
    } finally {
      setIsLoadingRequests(false);
    }
  };

  const handleUpvote = async (recordId: string) => {
    if (votedIds.has(recordId)) return;

    try {
      const response = await fetch('/.netlify/functions/upvote-feature-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ recordId })
      });

      if (response.ok) {
        // Update local state
        setFeatureRequests(prev =>
          prev.map(req =>
            req.id === recordId ? { ...req, upvotes: req.upvotes + 1 } : req
          )
        );
        // Save to localStorage
        const newVotedIds = new Set(votedIds).add(recordId);
        setVotedIds(newVotedIds);
        localStorage.setItem('votedFeatureRequests', JSON.stringify([...newVotedIds]));
      }
    } catch (error) {
      console.error('Error upvoting:', error);
    }
  };

  const roles = [
    { value: 'manager', label: t('form.role.options.manager') },
    { value: 'coach', label: t('form.role.options.coach') },
    { value: 'player', label: t('form.role.options.player') },
    { value: 'trainer', label: t('form.role.options.trainer') },
    { value: 'parent', label: t('form.role.options.parent') }
  ];

  const categories = [
    { value: 'ui', label: t('form.category.options.ui') },
    { value: 'performance', label: t('form.category.options.performance') },
    { value: 'newFeature', label: t('form.category.options.newFeature') },
    { value: 'bugFix', label: t('form.category.options.bugFix') }
  ];

  const priorities = [
    { value: 'niceToHave', label: t('form.priority.options.niceToHave') },
    { value: 'important', label: t('form.priority.options.important') },
    { value: 'critical', label: t('form.priority.options.critical') }
  ];

  const statuses = [
    { value: 'all', label: t('board.filters.all') },
    { value: 'Submitted', label: t('board.filters.submitted') },
    { value: 'Under Review', label: t('board.filters.underReview') },
    { value: 'Planned', label: t('board.filters.planned') },
    { value: 'In Progress', label: t('board.filters.inProgress') },
    { value: 'Completed', label: t('board.filters.completed') },
    { value: 'Not Planned', label: t('board.filters.notPlanned') }
  ];

  const filteredRequests = statusFilter === 'all'
    ? featureRequests
    : featureRequests.filter(req => req.status === statusFilter);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Submitted': return 'bg-gray-100 text-gray-700';
      case 'Under Review': return 'bg-blue-100 text-blue-700';
      case 'Planned': return 'bg-purple-100 text-purple-700';
      case 'In Progress': return 'bg-yellow-100 text-yellow-700';
      case 'Completed': return 'bg-green-100 text-green-700';
      case 'Not Planned': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Submitted': return <Clock size={14} />;
      case 'Under Review': return <AlertCircle size={14} />;
      case 'Planned': return <Tag size={14} />;
      case 'In Progress': return <Loader2 size={14} className="animate-spin" />;
      case 'Completed': return <CheckCircle size={14} />;
      case 'Not Planned': return <XCircle size={14} />;
      default: return <Clock size={14} />;
    }
  };

  const getRoleLabel = (role: string) => {
    const roleMap: Record<string, string> = {
      manager: t('form.role.options.manager'),
      coach: t('form.role.options.coach'),
      player: t('form.role.options.player'),
      trainer: t('form.role.options.trainer'),
      parent: t('form.role.options.parent')
    };
    return roleMap[role] || role;
  };

  const getCategoryLabel = (category: string) => {
    const categoryMap: Record<string, string> = {
      ui: t('form.category.options.ui'),
      performance: t('form.category.options.performance'),
      newFeature: t('form.category.options.newFeature'),
      bugFix: t('form.category.options.bugFix')
    };
    return categoryMap[category] || category;
  };

  return (
    <div className="pt-24 pb-16">
      <SEO />
      {/* Hidden iframe for form submission */}
      <iframe name="hidden_iframe" style={{ display: 'none' }} title="hidden"></iframe>

      <section className="relative min-h-[60vh] bg-gradient-to-br from-[#17242C] via-[#10605A] to-[#004953] text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, rgba(0, 184, 138, 0.1) 0%, transparent 50%),
                               radial-gradient(circle at 80% 20%, rgba(0, 184, 138, 0.05) 0%, transparent 50%)`
            }}
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 pt-32 pb-20">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#00B88A]/20 border border-[#00B88A]/30 text-[#00B88A] px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm mb-6">
              <Lightbulb size={16} />
              {t('hero.badge')}
            </div>

            {/* Title */}
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {t('hero.title')} <span className="bg-gradient-to-r from-[#00B88A] to-[#008C8D] bg-clip-text text-transparent">{t('hero.titleHighlight')}</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-[#F7F2F0] leading-relaxed">
              {t('hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Left side - How it works */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-8">{t('info.title')}</h2>
              <div className="space-y-6">
                <StepCard
                  number={1}
                  icon={<Send size={20} />}
                  title={t('info.steps.submit.title')}
                  description={t('info.steps.submit.description')}
                />
                <StepCard
                  number={2}
                  icon={<Users size={20} />}
                  title={t('info.steps.review.title')}
                  description={t('info.steps.review.description')}
                />
                <StepCard
                  number={3}
                  icon={<Lightbulb size={20} />}
                  title={t('info.steps.implement.title')}
                  description={t('info.steps.implement.description')}
                />
              </div>
            </div>

            {/* Right side - Form */}
            <div>
              <form ref={formRef} action="https://hooks.airtable.com/workflows/v1/genericWebhook/appTdGGAOwnN8q4D8/wflUp0QGsoHnnxFwo/wtr6As6SCKZhvyBYa" method="POST" target="hidden_iframe" onSubmit={handleFormSubmit} className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-primary mb-6">{t('form.title')}</h3>
                <div className="space-y-5">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('form.name.label')}
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                      <input
                        type="text"
                        id="name"
                        name="Name"
                        className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300"
                        placeholder={t('form.name.placeholder')}
                        required
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('form.email.label')}
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                      <input
                        type="email"
                        id="email"
                        name="Email"
                        className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300"
                        placeholder={t('form.email.placeholder')}
                        required
                      />
                    </div>
                  </div>

                  {/* Role */}
                  <div>
                    <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('form.role.label')}
                    </label>
                    <div className="relative">
                      <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                      <select
                        id="role"
                        name="Role"
                        className="w-full pl-12 pr-10 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300 appearance-none bg-white"
                        required
                      >
                        <option value="">{t('form.role.placeholder')}</option>
                        {roles.map(role => (
                          <option key={role.value} value={role.value}>{role.label}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                    </div>
                  </div>

                  {/* Category */}
                  <div>
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('form.category.label')}
                    </label>
                    <div className="relative">
                      <Tag className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                      <select
                        id="category"
                        name="Category"
                        className="w-full pl-12 pr-10 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300 appearance-none bg-white"
                        required
                      >
                        <option value="">{t('form.category.placeholder')}</option>
                        {categories.map(cat => (
                          <option key={cat.value} value={cat.value}>{cat.label}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                    </div>
                  </div>

                  {/* Priority */}
                  <div>
                    <label htmlFor="priority" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('form.priority.label')}
                    </label>
                    <div className="relative">
                      <AlertCircle className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                      <select
                        id="priority"
                        name="Priority"
                        className="w-full pl-12 pr-10 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300 appearance-none bg-white"
                        required
                      >
                        <option value="">{t('form.priority.placeholder')}</option>
                        {priorities.map(pri => (
                          <option key={pri.value} value={pri.value}>{pri.label}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('form.description.label')}
                    </label>
                    <div className="relative">
                      <Lightbulb className="absolute left-4 top-4 text-gray-400" size={20} />
                      <textarea
                        id="description"
                        name="Description"
                        rows={5}
                        className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300"
                        placeholder={t('form.description.placeholder')}
                        required
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full btn-primary flex items-center justify-center gap-2 group"
                  >
                    <Send size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                    {t('form.submit')}
                  </button>

                  {/* Success Message */}
                  {submitted && (
                    <div className="mt-4 p-3 bg-green-50 text-green-700 rounded-lg">
                      {t('form.success')}
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Request Board Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">{t('board.title')}</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">{t('board.subtitle')}</p>
            </div>

            {/* Status Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {statuses.map(status => (
                <button
                  key={status.value}
                  onClick={() => setStatusFilter(status.value)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    statusFilter === status.value
                      ? 'bg-secondary text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {status.label}
                </button>
              ))}
            </div>

            {/* Feature Request Cards */}
            {isLoadingRequests ? (
              <div className="flex justify-center py-12">
                <Loader2 className="w-8 h-8 animate-spin text-secondary" />
              </div>
            ) : filteredRequests.length === 0 ? (
              <div className="text-center py-12">
                <Lightbulb className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">{t('board.empty')}</p>
              </div>
            ) : (
              <div className="grid gap-4">
                {filteredRequests.map(request => (
                  <div
                    key={request.id}
                    className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6"
                  >
                    <div className="flex flex-col md:flex-row md:items-start gap-4">
                      {/* Upvote Button */}
                      <button
                        onClick={() => handleUpvote(request.id)}
                        disabled={votedIds.has(request.id)}
                        className={`flex flex-col items-center justify-center p-3 rounded-xl transition-all duration-300 min-w-[70px] ${
                          votedIds.has(request.id)
                            ? 'bg-secondary/10 text-secondary cursor-default'
                            : 'bg-gray-100 text-gray-500 hover:bg-secondary/10 hover:text-secondary'
                        }`}
                      >
                        <ThumbsUp size={20} className={votedIds.has(request.id) ? 'fill-current' : ''} />
                        <span className="font-bold mt-1">{request.upvotes}</span>
                      </button>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          {/* Status Badge */}
                          <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(request.status)}`}>
                            {getStatusIcon(request.status)}
                            {request.status}
                          </span>
                          {/* Category Badge */}
                          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                            <Tag size={12} />
                            {getCategoryLabel(request.category)}
                          </span>
                          {/* Anonymous User */}
                          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                            <User size={12} />
                            {t('board.anonymousUser', { role: getRoleLabel(request.role) })}
                          </span>
                        </div>
                        <p className="text-gray-700">{request.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

interface StepCardProps {
  number: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const StepCard: React.FC<StepCardProps> = ({ number, icon, title, description }) => {
  return (
    <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex-shrink-0 w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center text-secondary font-bold">
        {number}
      </div>
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-secondary">{icon}</span>
          <h3 className="font-semibold text-gray-900">{title}</h3>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default FeatureRequest;
