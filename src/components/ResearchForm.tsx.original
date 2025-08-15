'use client';

import { useState, useEffect } from 'react';
import { cn, isValidEmail } from '@/lib/utils';
import { organizations, topics, timeframeOptions, type FormData } from '@/lib/data';

interface FormErrors {
  organizations?: string;
  topics?: string;
  timeframe?: string;
  email?: string;
}

export function ResearchForm() {
  const [mounted, setMounted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  
  const [formData, setFormData] = useState<FormData>({
    organizations: [],
    topics: [],
    timeframe: '',
    email: ''
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (formData.organizations.length === 0) {
      newErrors.organizations = 'Please select at least one organization';
    }
    
    if (formData.topics.length === 0) {
      newErrors.topics = 'Please select at least one topic';
    }
    
    if (!formData.timeframe) {
      newErrors.timeframe = 'Please select a timeframe';
    }
    
    if (!formData.email) {
      newErrors.email = 'Please enter your email';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Get comprehensive organization and topic details
      const selectedOrgObjects = formData.organizations.map(orgId => 
        organizations.find(org => org.id === orgId)
      ).filter((org): org is NonNullable<typeof org> => Boolean(org));
      
      const selectedTopicObjects = formData.topics.map(topicId => 
        topics.find(topic => topic.id === topicId)
      ).filter((topic): topic is NonNullable<typeof topic> => Boolean(topic));

      const selectedOrgs = selectedOrgObjects.map(org => org.name);
      const selectedTopics = selectedTopicObjects.map(topic => topic.name);

      // Create detailed organization info for the AI agent
      const organizationDetails = selectedOrgObjects.map(org => 
        `${org.name} (${org.label}) - ${org.type} organization in ${org.region}. ${org.description}`
      ).join('\n\n');

      // Create detailed topic info for the AI agent
      const topicDetails = selectedTopicObjects.map(topic => 
        `${topic.name}: ${topic.description}`
      ).join('\n\n');

      // Prepare URL parameters for n8n webhook (GET method - matching your n8n config)
      const params = new URLSearchParams();
      params.append('name', 'IEN Research Request');
      params.append('email', formData.email);
      params.append('institution', selectedOrgs.join(', '));
      params.append('subject', `Research Request: ${selectedTopics.join(', ')} - ${formData.timeframe}`);
      params.append('message', `Research topics: ${selectedTopics.join(', ')}\nOrganizations: ${selectedOrgs.join(', ')}\nTimeframe: ${formData.timeframe}\nSubmitted: ${new Date().toISOString()}`);
      params.append('timestamp', new Date().toISOString());
      params.append('source', 'IEN Research Intelligence Platform');
      
      // Add detailed organization and topic information for the AI agent
      params.append('organizationDetails', organizationDetails);
      params.append('topicDetails', topicDetails);
      
      // Add individual organizations and topics for easier processing
      formData.organizations.forEach((org, index) => {
        params.append(`organization_${index + 1}`, org);
      });
      formData.topics.forEach((topic, index) => {
        params.append(`topic_${index + 1}`, topic);
      });
      params.append('timeframe', formData.timeframe);
      
      console.log('URL params:', params.toString());

      console.log('Sending GET request with params');

      // Webhook submission to n8n (GET method - matching your current n8n config)
      const response = await fetch(`https://n8n.emmi.zone/webhook/11eb1656-fbc3-40c8-a11b-c95f67c330a2?${params.toString()}`, {
        method: 'GET',
      });

      console.log('Response status:', response.status);

      if (response.ok) {
        setShowSuccess(true);
        // Reset form after 3 seconds
        setTimeout(() => {
          setFormData({ organizations: [], topics: [], timeframe: '', email: '' });
          setShowSuccess(false);
        }, 3000);
      } else {
        const errorText = await response.text();
        console.error('Webhook response:', response.status, response.statusText, errorText);
        throw new Error(`Submission failed: ${response.status} ${response.statusText}`);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleSelection = (value: string, field: 'organizations' | 'topics') => {
    setFormData(prev => {
      const currentList = prev[field];
      
      if (currentList.includes(value)) {
        // Remove if already selected
        return {
          ...prev,
          [field]: currentList.filter(item => item !== value)
        };
      } else {
        // Add if not selected, but check limits
        if (field === 'organizations' && currentList.length >= 6) {
          // Don't allow more than 6 organizations
          return prev;
        }
        
        return {
          ...prev,
          [field]: [...currentList, value]
        };
      }
    });
    
    // Clear error when user makes selection
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  if (!mounted) return null;

  if (showSuccess) {
    return (
      <div className="text-center py-20 opacity-100 transition-opacity duration-500">
        <div className="w-20 h-20 bg-ien-mint rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-ien-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-ien-navy mb-4">Request Submitted Successfully!</h2>
        <p className="text-xl text-ien-charcoal opacity-70 mb-8">
          Your intelligence report is being generated. We&apos;ll send it to your email shortly.
        </p>
        <div className="animate-pulse text-ien-teal font-medium">
          Resetting form...
        </div>
      </div>
    );
  }

  return (
    <div className="relative backdrop-blur-md bg-blue-500/20 rounded-3xl border border-blue-300/40 shadow-xl p-8 sm:p-12 opacity-100 transition-all duration-500 transform translate-y-0">
      <div className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-ien-navy mb-6">
          Generate Intelligence Report
        </h2>
        <p className="text-xl sm:text-2xl text-ien-charcoal opacity-70 max-w-3xl mx-auto leading-relaxed">
          Select organizations, topics, and timeframe to receive a comprehensive 
          intelligence report powered by advanced analytics.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Organizations Selection */}
        <div className="space-y-4">
          <label className="block text-2xl font-semibold text-ien-navy">
            Select Organizations
            <span className="text-ien-coral ml-1">*</span>
            <span className="text-base font-normal text-ien-charcoal/70 ml-2">(max 6)</span>
          </label>
          <p className="text-lg text-ien-charcoal/60 mb-4">
            Choose from all {organizations.length} Irish Environmental Network members
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-h-64 overflow-y-auto border border-gray-200 rounded-lg p-4">
            {organizations.map((org) => (
              <button
                key={org.id}
                type="button"
                onClick={() => toggleSelection(org.id, 'organizations')}
                disabled={!formData.organizations.includes(org.id) && formData.organizations.length >= 6}
                className={cn(
                  "card-selectable text-left p-3 transition-opacity",
                  formData.organizations.includes(org.id) && "card-selected",
                  !formData.organizations.includes(org.id) && formData.organizations.length >= 6 && "opacity-50 cursor-not-allowed"
                )}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-base text-ien-navy truncate">
                      {org.name}
                    </div>
                    <div className="text-sm text-ien-charcoal/60 mt-1">
                      {org.region} • {org.type}
                    </div>
                  </div>
                  {formData.organizations.includes(org.id) && (
                    <div className="ml-2 w-5 h-5 bg-ien-teal rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>
          
          <div className={cn(
            "text-lg font-medium",
            formData.organizations.length >= 6 ? "text-ien-coral" : "text-ien-teal"
          )}>
            {formData.organizations.length}/6 organization{formData.organizations.length !== 1 ? 's' : ''} selected
            {formData.organizations.length >= 6 && (
              <span className="block text-sm text-ien-coral/80 mt-1">
                Maximum limit reached
              </span>
            )}
          </div>
          
          {errors.organizations && (
            <p className="text-ien-coral text-lg font-medium">{errors.organizations}</p>
          )}
        </div>

        {/* Topics Selection */}
        <div className="space-y-4">
          <label className="block text-2xl font-semibold text-ien-navy">
            Select Research Topics
            <span className="text-ien-coral ml-1">*</span>
          </label>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {topics.map((topic) => (
              <button
                key={topic.id}
                type="button"
                onClick={() => toggleSelection(topic.id, 'topics')}
                className={cn(
                  "card-selectable text-left p-4 h-full",
                  formData.topics.includes(topic.id) && "card-selected"
                )}
              >
                <div className="flex items-start justify-between h-full">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <span className="text-3xl mr-3">{topic.icon}</span>
                      <div className="font-semibold text-lg text-ien-navy">{topic.name}</div>
                    </div>
                    <p className="text-base text-ien-charcoal/70 leading-relaxed">
                      {topic.description}
                    </p>
                  </div>
                  {formData.topics.includes(topic.id) && (
                    <div className="ml-3 w-6 h-6 bg-ien-teal rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>
          
          <div className="text-lg text-ien-teal font-medium">
            {formData.topics.length} topic{formData.topics.length !== 1 ? 's' : ''} selected
          </div>
          
          {errors.topics && (
            <p className="text-ien-coral text-lg font-medium">{errors.topics}</p>
          )}
        </div>

        {/* Timeframe Selection */}
        <div className="space-y-4">
          <label className="block text-2xl font-semibold text-ien-navy">
            Analysis Timeframe
            <span className="text-ien-coral ml-1">*</span>
          </label>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {timeframeOptions.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => {
                  setFormData(prev => ({ ...prev, timeframe: option.value }));
                  if (errors.timeframe) {
                    setErrors(prev => ({ ...prev, timeframe: undefined }));
                  }
                }}
                className={cn(
                  "card-selectable text-center p-4",
                  formData.timeframe === option.value && "card-selected"
                )}
              >
                <div className="font-semibold text-lg text-ien-navy mb-2">{option.label}</div>
                <p className="text-base text-ien-charcoal/70">{option.description}</p>
                {formData.timeframe === option.value && (
                  <div className="mt-3 w-6 h-6 bg-ien-teal rounded-full flex items-center justify-center mx-auto">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                )}
              </button>
            ))}
          </div>
          
          {errors.timeframe && (
            <p className="text-ien-coral text-lg font-medium">{errors.timeframe}</p>
          )}
        </div>

        {/* Email Input */}
        <div className="space-y-4">
          <label htmlFor="email" className="block text-2xl font-semibold text-ien-navy">
            Email Address
            <span className="text-ien-coral ml-1">*</span>
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => {
              setFormData(prev => ({ ...prev, email: e.target.value }));
              if (errors.email) {
                setErrors(prev => ({ ...prev, email: undefined }));
              }
            }}
            className={cn(
              "input-modern w-full",
              errors.email && "border-ien-coral focus:border-ien-coral focus:ring-ien-coral/20"
            )}
            placeholder="Enter your email to receive the report"
          />
          {errors.email && (
            <p className="text-ien-coral text-lg font-medium">{errors.email}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-6">
          <button
            type="submit"
            disabled={isSubmitting}
            className={cn(
              "w-full btn-primary text-xl py-6 relative overflow-hidden group font-semibold",
              isSubmitting && "opacity-75 cursor-not-allowed"
            )}
          >
            <span className="relative z-10 flex items-center justify-center">
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Generating Report...
                </>
              ) : (
                <>
                  Generate Intelligence Report
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </>
              )}
            </span>
            <div className="absolute inset-0 bg-ien-teal transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </button>
        </div>
      </form>
    </div>
  );
}