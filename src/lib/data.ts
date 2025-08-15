/**
 * IEN Research Intelligence Platform Data
 * Irish Environmental Network Organizations and Topics
 * Perfect for National AI Challenge Ireland 🇮🇪
 */

export interface Organization {
  id: string;
  name: string;
  label: string;
  region: 'Dublin' | 'Cork' | 'Galway' | 'Belfast' | 'Limerick' | 'Waterford' | 'National';
  type: 'Wildlife' | 'Climate' | 'Marine' | 'Forest' | 'Energy' | 'Policy' | 'Education' | 'Conservation';
  description: string;
}

export interface Topic {
  id: string;
  name: string;
  label: string;
  icon: string;
  color: string;
  description: string;
}

export interface TimeframeOption {
  value: string;
  label: string;
  description: string;
}

// 41 Irish Environmental Organizations - Real IEN Members
export const organizations: Organization[] = [
  // Dublin Region
  { 
    id: 'org_antaisce', 
    name: 'An Taisce', 
    label: 'An Taisce (The National Trust for Ireland)',
    region: 'Dublin',
    type: 'Policy',
    description: 'Ireland\'s oldest environmental organization, protecting heritage and environment'
  },
  { 
    id: 'org_fie', 
    name: 'Friends of the Irish Environment', 
    label: 'Friends of the Irish Environment',
    region: 'Dublin',
    type: 'Policy',
    description: 'Environmental law and advocacy organization'
  },
  { 
    id: 'org_cultivate', 
    name: 'Cultivate', 
    label: 'Cultivate',
    region: 'Dublin',
    type: 'Education',
    description: 'Sustainable living and environmental education'
  },
  { 
    id: 'org_ecoadvocacy', 
    name: 'Eco-Advocacy', 
    label: 'Eco-Advocacy',
    region: 'Dublin',
    type: 'Policy',
    description: 'Environmental advocacy and legal support'
  },
  { 
    id: 'org_ecounesco', 
    name: 'ECO-UNESCO', 
    label: 'ECO-UNESCO',
    region: 'Dublin',
    type: 'Education',
    description: 'Young environmentalist programme and education'
  },
  { 
    id: 'org_gap', 
    name: 'Global Action Plan', 
    label: 'Global Action Plan',
    region: 'Dublin',
    type: 'Climate',
    description: 'Behaviour change for environmental sustainability'
  },
  
  // Cork Region  
  { 
    id: 'org_coastwatch', 
    name: 'Coastwatch', 
    label: 'Coastwatch',
    region: 'Cork',
    type: 'Marine',
    description: 'Coastal and marine environment monitoring'
  },
  { 
    id: 'org_voice', 
    name: 'Voice Ireland', 
    label: 'Voice Ireland',
    region: 'Cork',
    type: 'Policy',
    description: 'Environmental advocacy and community voice'
  },
  { 
    id: 'org_organic', 
    name: 'The Organic Centre', 
    label: 'The Organic Centre',
    region: 'Cork',
    type: 'Education',
    description: 'Organic farming and sustainable agriculture'
  },
  
  // Galway Region
  { 
    id: 'org_feasta', 
    name: 'Feasta', 
    label: 'Feasta',
    region: 'Galway',
    type: 'Policy',
    description: 'Foundation for the Economics of Sustainability'
  },
  { 
    id: 'org_sonairte', 
    name: 'Sonairte', 
    label: 'Sonairte',
    region: 'Galway',
    type: 'Education',
    description: 'National ecology centre and environmental education'
  },
  
  // National Organizations
  { 
    id: 'org_birdwatch', 
    name: 'BirdWatch Ireland', 
    label: 'BirdWatch Ireland',
    region: 'National',
    type: 'Wildlife',
    description: 'Bird conservation and wildlife protection'
  },
  { 
    id: 'org_bat', 
    name: 'Bat Conservation Ireland', 
    label: 'Bat Conservation Ireland',
    region: 'National',
    type: 'Wildlife',
    description: 'Bat species conservation and research'
  },
  { 
    id: 'org_celt', 
    name: 'CELT', 
    label: 'CELT (Centre for Environmental Living & Training)',
    region: 'National',
    type: 'Education',
    description: 'Environmental education and sustainable living'
  },
  { 
    id: 'org_cloughjordan', 
    name: 'Cloughjordan EcoVillage', 
    label: 'Cloughjordan EcoVillage',
    region: 'National',
    type: 'Education',
    description: 'Sustainable community and eco-village model'
  },
  { 
    id: 'org_crann', 
    name: 'Crann', 
    label: 'Crann',
    region: 'National',
    type: 'Forest',
    description: 'Tree planting and forest conservation'
  },
  { 
    id: 'org_rediscovery', 
    name: 'Rediscovery Centre', 
    label: 'Rediscovery Centre',
    region: 'National',
    type: 'Education',
    description: 'Environmental awareness and waste reduction'
  },
  { 
    id: 'org_gea', 
    name: 'Good Energies Alliance', 
    label: 'Good Energies Alliance',
    region: 'National',
    type: 'Energy',
    description: 'Renewable energy advocacy and education'
  },
  { 
    id: 'org_gfi', 
    name: 'Green Foundation Ireland', 
    label: 'Green Foundation Ireland',
    region: 'National',
    type: 'Policy',
    description: 'Environmental policy and sustainable development'
  },
  { 
    id: 'org_hedgerows', 
    name: 'Hedgerows Ireland', 
    label: 'Hedgerows Ireland',
    region: 'National',
    type: 'Conservation',
    description: 'Hedgerow conservation and biodiversity'
  },
  { 
    id: 'org_gef', 
    name: 'Green Economy Foundation', 
    label: 'Green Economy Foundation',
    region: 'National',
    type: 'Policy',
    description: 'Green economy development and policy'
  },
  { 
    id: 'org_iaf', 
    name: 'Irish Agroforestry Forum', 
    label: 'Irish Agroforestry Forum',
    region: 'National',
    type: 'Forest',
    description: 'Agroforestry promotion and development'
  },
  { 
    id: 'org_ipcc', 
    name: 'Irish Peatlands Conservation Council', 
    label: 'Irish Peatlands Conservation Council',
    region: 'National',
    type: 'Conservation',
    description: 'Peatland conservation and restoration'
  },
  { 
    id: 'org_iss', 
    name: 'Irish Seed Savers', 
    label: 'Irish Seed Savers',
    region: 'National',
    type: 'Conservation',
    description: 'Heritage seed and plant conservation'
  },
  { 
    id: 'org_iwdg', 
    name: 'Irish Whale and Dolphin Group', 
    label: 'Irish Whale and Dolphin Group',
    region: 'National',
    type: 'Marine',
    description: 'Marine mammal conservation and research'
  },
  { 
    id: 'org_iwt', 
    name: 'Irish Wildlife Trust', 
    label: 'Irish Wildlife Trust',
    region: 'National',
    type: 'Wildlife',
    description: 'Wildlife conservation and habitat protection'
  },
  { 
    id: 'org_lnt', 
    name: 'Leave No Trace', 
    label: 'Leave No Trace',
    region: 'National',
    type: 'Education',
    description: 'Outdoor ethics and environmental education'
  },
  { 
    id: 'org_streamscapes', 
    name: 'Streamscapes', 
    label: 'Streamscapes',
    region: 'National',
    type: 'Conservation',
    description: 'River and stream ecosystem restoration'
  },
  { 
    id: 'org_nwt', 
    name: 'Native Woodland Trust', 
    label: 'Native Woodland Trust',
    region: 'National',
    type: 'Forest',
    description: 'Native woodland conservation and restoration'
  },
  { 
    id: 'org_giy', 
    name: 'GIY', 
    label: 'GIY (Grow It Yourself)',
    region: 'National',
    type: 'Education',
    description: 'Food growing and sustainable gardening'
  },
  { 
    id: 'org_talamhbeo', 
    name: 'Talamh Beo', 
    label: 'Talamh Beo',
    region: 'National',
    type: 'Conservation',
    description: 'Living land and sustainable agriculture'
  },
  { 
    id: 'org_envforum', 
    name: 'The Environmental Forum', 
    label: 'The Environmental Forum',
    region: 'National',
    type: 'Policy',
    description: 'Environmental policy discussion and advocacy'
  },
  { 
    id: 'org_vincent', 
    name: 'Vincent Wildlife Trust', 
    label: 'Vincent Wildlife Trust',
    region: 'National',
    type: 'Wildlife',
    description: 'Wildlife conservation and species protection'
  },
  { 
    id: 'org_wri', 
    name: 'Wildlife Rehabilitation Ireland', 
    label: 'Wildlife Rehabilitation Ireland',
    region: 'National',
    type: 'Wildlife',
    description: 'Wildlife rescue and rehabilitation'
  },
  { 
    id: 'org_foe', 
    name: 'Friends of the Earth', 
    label: 'Friends of the Earth',
    region: 'National',
    type: 'Policy',
    description: 'Campaign and build movement power to bring about system change for a just world'
  },
  { 
    id: 'org_gluaiseacht', 
    name: 'Gluaiseacht', 
    label: 'Gluaiseacht',
    region: 'National',
    type: 'Policy',
    description: 'Environmental and social justice movement taking non-violent direct action'
  },
  { 
    id: 'org_greensod', 
    name: 'Green Sod Ireland', 
    label: 'Green Sod Ireland',
    region: 'National',
    type: 'Conservation',
    description: 'Protects Irish land in perpetuity through proactive re-wilding'
  },
  { 
    id: 'org_ibcp', 
    name: 'Irish Bee Conservation Project', 
    label: 'Irish Bee Conservation Project',
    region: 'National',
    type: 'Wildlife',
    description: 'Dedicated to protecting Ireland\'s 102 bee species and pollinators'
  },
  { 
    id: 'org_cycling', 
    name: 'Irish Cycling Campaign', 
    label: 'Irish Cycling Campaign',
    region: 'National',
    type: 'Policy',
    description: 'Advocates for everyday cycling as sustainable transport'
  },
  { 
    id: 'org_woodlands', 
    name: 'Woodlands of Ireland', 
    label: 'Woodlands of Ireland',
    region: 'National',
    type: 'Forest',
    description: 'Conservation and expansion of native semi-natural woodlands'
  },
  { 
    id: 'org_zwai', 
    name: 'Zero Waste Alliance Ireland', 
    label: 'Zero Waste Alliance Ireland',
    region: 'National',
    type: 'Policy',
    description: 'Promotes circular economy and rethinking of disposal practices'
  },
];

// 6 Key Environmental Topics for Intelligence Analysis
export const topics: Topic[] = [
  {
    id: 'topic_nrl',
    name: 'Nature Restoration Law',
    label: 'Nature Restoration Law',
    icon: '🌿',
    color: 'emerald',
    description: 'EU Nature Restoration Law implementation and biodiversity recovery'
  },
  {
    id: 'topic_mpa',
    name: 'Marine Protected Areas',
    label: 'Marine Protected Areas',
    icon: '🌊',
    color: 'blue',
    description: 'Marine conservation zones and ocean protection initiatives'
  },
  {
    id: 'topic_caf',
    name: 'Climate Action Fund',
    label: 'Climate Action Fund',
    icon: '🌡️',
    color: 'orange',
    description: 'Climate financing and carbon reduction projects'
  },
  {
    id: 'topic_env',
    name: 'Environmental Sustainability',
    label: 'Environmental Sustainability',
    icon: '♻️',
    color: 'green',
    description: 'Sustainable practices and environmental protection measures'
  },
  {
    id: 'topic_econ',
    name: 'Economic Sustainability',
    label: 'Economic Sustainability',
    icon: '💚',
    color: 'teal',
    description: 'Green economy and sustainable economic development'
  },
  {
    id: 'topic_social',
    name: 'Social Sustainability',
    label: 'Social Sustainability',
    icon: '🤝',
    color: 'purple',
    description: 'Community engagement and social environmental justice'
  },
];

// Timeframe Options for Intelligence Analysis
export const timeframeOptions: TimeframeOption[] = [
  {
    value: 'Last 30 days',
    label: 'Last 30 days',
    description: 'Recent activities and current trends'
  },
  {
    value: 'Last 3 months',
    label: 'Last 3 months',
    description: 'Quarterly analysis and seasonal patterns'
  },
  {
    value: 'Last 6 months',
    label: 'Last 6 months',
    description: 'Medium-term trends and policy developments'
  },
];

// Form validation schema types
export interface FormData {
  organizations: string[];
  topics: string[];
  timeframe: string;
  email: string;
}

// API response types
export interface IntelligenceReport {
  id: string;
  organizations: Organization[];
  topics: Topic[];
  timeframe: string;
  generatedAt: Date;
  summary: string;
  keyInsights: string[];
  metrics: {
    activitiesAnalyzed: number;
    organizationsActive: number;
    topicsEngaged: number;
  };
  recommendations: string[];
}

// Analytics data for dashboard
export interface AnalyticsData {
  totalReports: number;
  activeOrganizations: number;
  topTopics: Array<{ topic: string; count: number }>;
  recentActivity: Array<{
    organization: string;
    topic: string;
    date: Date;
    activity: string;
  }>;
}