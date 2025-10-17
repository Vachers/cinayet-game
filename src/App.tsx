import React, { useState, useEffect } from 'react';
import { 
  User, 
  Users, 
  Shield, 
  Sword, 
  Target,
  Star,
  TrendingUp,
  Clock,
  MapPin,
  Award,
  Zap,
  Eye,
  Play,
  MessageCircle,
  Calendar,
  DollarSign,
  Crown,
  Skull,
  Crosshair,
  Car,
  Briefcase,
  Home,
  ShoppingBag,
  Plane,
  Building,
  Gamepad2,
  Newspaper,
  Settings,
  HelpCircle,
  LogIn,
  UserPlus,
  Facebook,
  Instagram,
  ArrowRight,
  ChevronDown,
  Flame,
  AlertTriangle,
  Activity,
  Fingerprint,
  Lock,
  Radar,
  Timer,
  Trophy,
  Globe,
  Server,
  Wifi,
  Heart,
  Code,
  Database,
  Cpu,
  HardDrive,
  Monitor,
  Gauge,
  Swords,
  Mail,
  EyeOff,
  Check,
  X,
  AlertCircle,
  KeyRound,
  Calendar as CalendarIcon,
  ArrowLeft,
  UserCheck,
  CheckCircle2,
  Info,
  Search,
  Filter,
  Pin,
  MessageSquare,
  ThumbsUp,
  ThumbsDown,
  Reply,
  Quote,
  Edit3,
  Trash2,
  AlertOctagon,
  ChevronRight,
  Bell,
  Bookmark,
  Share2,
  MoreHorizontal,
  FileText,
  Hash,
  Trending,
  TrendingDown,
  UserX,
  Ban,
  ShieldAlert,
  Lock as LockIcon,
  Unlock,
  Megaphone,
  Zap as LightningIcon,
  Fire,
  Ice,
  Wind
} from 'lucide-react';

// Forum Page Component
const ForumPage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [showNewTopicModal, setShowNewTopicModal] = useState(false);
  const [sortBy, setSortBy] = useState('latest');

  // Forum Categories Data
  const categories = [
    {
      id: 'genel',
      name: 'Genel Tartışmalar',
      icon: <MessageCircle className="w-5 h-5" />,
      description: 'Oyun hakkında genel konuşmalar',
      topics: 2847,
      posts: 45921,
      lastPost: {
        user: 'KartalAslan',
        time: '5 dakika önce',
        title: 'Yeni güncelleme hakkında'
      },
      color: 'text-blue-500',
      bgColor: 'from-blue-600/10 to-blue-800/10',
      borderColor: 'border-blue-500/30'
    },
    {
      id: 'strateji',
      name: 'Strateji & Taktikler',
      icon: <Target className="w-5 h-5" />,
      description: 'Savaş stratejileri ve oyun taktikleri',
      topics: 1523,
      posts: 28947,
      lastPost: {
        user: 'StratejiUstası',
        time: '12 dakika önce',
        title: 'En etkili saldırı planları'
      },
      color: 'text-orange-500',
      bgColor: 'from-orange-600/10 to-orange-800/10',
      borderColor: 'border-orange-500/30'
    },
    {
      id: 'ceteler',
      name: 'Çete Rekrutları',
      icon: <Users className="w-5 h-5" />,
      description: 'Çete arama, üye bulma ve ittifaklar',
      topics: 892,
      posts: 15647,
      lastPost: {
        user: 'ÇeteLideri',
        time: '23 dakika önce',
        title: 'Güçlü çete arıyor!'
      },
      color: 'text-purple-500',
      bgColor: 'from-purple-600/10 to-purple-800/10',
      borderColor: 'border-purple-500/30'
    },
    {
      id: 'yardim',
      name: 'Yardım & Destek',
      icon: <HelpCircle className="w-5 h-5" />,
      description: 'Teknik sorunlar ve oyun rehberi',
      topics: 1247,
      posts: 8934,
      lastPost: {
        user: 'DestekEkibi',
        time: '1 saat önce',
        title: 'Giriş sorunu çözümü'
      },
      color: 'text-green-500',
      bgColor: 'from-green-600/10 to-green-800/10',
      borderColor: 'border-green-500/30'
    },
    {
      id: 'pazar',
      name: 'Pazar Yeri',
      icon: <ShoppingBag className="w-5 h-5" />,
      description: 'Alım-satım ve ticaret',
      topics: 687,
      posts: 12456,
      lastPost: {
        user: 'TacirAhmet',
        time: '45 dakika önce',
        title: 'Nadir silah satışı'
      },
      color: 'text-yellow-500',
      bgColor: 'from-yellow-600/10 to-yellow-800/10',
      borderColor: 'border-yellow-500/30'
    },
    {
      id: 'haberler',
      name: 'Haberler & Duyurular',
      icon: <Megaphone className="w-5 h-5" />,
      description: 'Resmi duyurular ve güncellemeler',
      topics: 234,
      posts: 3892,
      lastPost: {
        user: 'AdminTeam',
        time: '2 saat önce',
        title: 'v2.4.1 Patch Notları'
      },
      color: 'text-red-500',
      bgColor: 'from-red-600/10 to-red-800/10',
      borderColor: 'border-red-500/30',
      isOfficial: true
    }
  ];

  // Sample Topics Data
  const topics = [
    {
      id: '1',
      title: 'Yeni silah sistemi hakkında görüşleriniz?',
      author: 'SilahUzmani',
      authorLevel: 42,
      authorRank: 'Veteran',
      replies: 156,
      views: 2847,
      lastReply: {
        user: 'KatilMakinesi',
        time: '3 dakika önce'
      },
      isPinned: true,
      isHot: true,
      category: 'genel',
      tags: ['silah', 'güncelleme', 'öneri']
    },
    {
      id: '2',
      title: 'En güçlü çete hangisi? Tartışalım!',
      author: 'ÇeteLideri99',
      authorLevel: 38,
      authorRank: 'Elite',
      replies: 89,
      views: 1456,
      lastReply: {
        user: 'KaraKartal',
        time: '15 dakika önce'
      },
      isHot: true,
      category: 'ceteler',
      tags: ['çete', 'güç', 'sıralama']
    },
    {
      id: '3',
      title: '[SATILIK] Efsanevi AK-47 Ejder Nefesi',
      author: 'SilahDealer',
      authorLevel: 29,
      authorRank: 'Trader',
      replies: 23,
      views: 892,
      lastReply: {
        user: 'ParaVarBurada',
        time: '1 saat önce'
      },
      category: 'pazar',
      tags: ['satış', 'silah', 'efsanevi']
    },
    {
      id: '4',
      title: 'Yeni oyuncular için başlangıç rehberi',
      author: 'YardımcıAbi',
      authorLevel: 67,
      authorRank: 'Mentor',
      replies: 234,
      views: 5672,
      lastReply: {
        user: 'YeniOyuncu123',
        time: '30 dakika önce'
      },
      isPinned: true,
      category: 'yardim',
      tags: ['rehber', 'başlangıç', 'yardım']
    }
  ];

  // Online Users Data
  const onlineUsers = [
    { name: 'AdminBoss', level: 100, status: 'online', role: 'admin' },
    { name: 'ModKral', level: 85, status: 'online', role: 'moderator' },
    { name: 'VeteranAsker', level: 72, status: 'online', role: 'veteran' },
    { name: 'ÇeteReisi', level: 58, status: 'idle', role: 'member' },
    { name: 'SavaşÇı', level: 44, status: 'online', role: 'member' }
  ];

  // Category View
  if (selectedCategory && !selectedTopic) {
    const category = categories.find(c => c.id === selectedCategory);
    const categoryTopics = topics.filter(t => t.category === selectedCategory);

    return (
      <div className="min-h-screen bg-gray-900">
        {/* Header */}
        <header className="bg-gray-900/95 backdrop-blur-sm border-b border-gray-700 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button 
                  onClick={() => setSelectedCategory(null)}
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors group"
                >
                  <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                  <span>Forum Ana Sayfa</span>
                </button>
                
                <ChevronRight className="w-4 h-4 text-gray-500" />
                
                <div className="flex items-center space-x-3">
                  <div className={category?.color}>
                    {category?.icon}
                  </div>
                  <h1 className="text-xl font-bold text-white">{category?.name}</h1>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <button 
                  onClick={() => setShowNewTopicModal(true)}
                  className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
                >
                  <span className="flex items-center space-x-2">
                    <Edit3 className="w-4 h-4" />
                    <span>Yeni Konu</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Category Content */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            {/* Main Content */}
            <div className="lg:col-span-3 space-y-6">
              
              {/* Category Info */}
              <div className={`bg-gradient-to-r ${category?.bgColor} rounded-lg border ${category?.borderColor} p-6`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-lg bg-black/20 ${category?.color}`}>
                      {category?.icon}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white">{category?.name}</h2>
                      <p className="text-gray-300">{category?.description}</p>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-white font-bold text-lg">{category?.topics.toLocaleString()}</div>
                    <div className="text-gray-400 text-sm">Konu</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-white font-bold text-xl">{category?.topics.toLocaleString()}</div>
                    <div className="text-gray-400 text-sm">Konular</div>
                  </div>
                  <div>
                    <div className="text-white font-bold text-xl">{category?.posts.toLocaleString()}</div>
                    <div className="text-gray-400 text-sm">Mesajlar</div>
                  </div>
                  <div>
                    <div className="text-white font-bold text-xl">2.1K</div>
                    <div className="text-gray-400 text-sm">Takipçi</div>
                  </div>
                </div>
              </div>

              {/* Search & Filters */}
              <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg border border-gray-600 p-4">
                <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
                  <div className="flex items-center space-x-4 w-full md:w-auto">
                <div className="relative flex-1 md:w-64">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Konularda ara..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500/50"
                      />
                    </div>
                    
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500/50"
                    >
                      <option value="latest">En Son</option>
                      <option value="popular">En Popüler</option>
                      <option value="replies">En Çok Yanıt</option>
                      <option value="views">En Çok Görüntülenme</option>
                    </select>
                  </div>

                  <div className="flex items-center space-x-2">
                    <button className="px-3 py-2 bg-orange-600/20 text-orange-400 border border-orange-500/30 rounded-lg hover:bg-orange-600/30 transition-colors">
                      <Filter className="w-4 h-4" />
                    </button>
                    <button className="px-3 py-2 bg-gray-700/50 text-gray-400 border border-gray-600 rounded-lg hover:bg-gray-600 transition-colors">
                      <Bell className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Topics List */}
              <div className="space-y-4">
                {categoryTopics.map((topic) => (
                  <div
                    key={topic.id}
                    onClick={() => setSelectedTopic(topic.id)}
                    className="bg-gray-800/80 backdrop-blur-sm rounded-lg border border-gray-600 hover:border-orange-500/50 p-6 transition-all duration-300 cursor-pointer group"
                  >
                    <div className="flex items-start space-x-4">
                      
                      {/* Topic Icon & Status */}
                      <div className="flex flex-col items-center space-y-2">
                        {topic.isPinned ? (
                          <div className="p-2 bg-orange-600/20 rounded-lg border border-orange-500/30">
                            <Pin className="w-5 h-5 text-orange-400" />
                          </div>
                        ) : topic.isHot ? (
                          <div className="p-2 bg-red-600/20 rounded-lg border border-red-500/30">
                            <Flame className="w-5 h-5 text-red-400" />
                          </div>
                        ) : (
                          <div className="p-2 bg-gray-700/50 rounded-lg border border-gray-600">
                            <MessageSquare className="w-5 h-5 text-gray-400" />
                          </div>
                        )}
                      </div>

                      {/* Topic Content */}
                      <div className="flex-1 min-w-0">
                        
                        {/* Title & Tags */}
                        <div className="mb-3">
                          <h3 className="text-white font-bold text-lg group-hover:text-orange-400 transition-colors mb-2">
                            {topic.title}
                          </h3>
                          <div className="flex items-center space-x-2">
                            {topic.tags.map((tag, index) => (
                              <span
                                key={index}
                                className="px-2 py-1 bg-gray-700/50 text-gray-400 text-xs rounded-md"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Author Info */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                              {topic.author.charAt(0)}
                            </div>
                            <div>
                              <div className="flex items-center space-x-2">
                                <span className="text-white font-medium">{topic.author}</span>
                                <span className="px-2 py-0.5 bg-orange-600/20 text-orange-400 text-xs rounded">
                                  Lvl {topic.authorLevel}
                                </span>
                                <span className="px-2 py-0.5 bg-purple-600/20 text-purple-400 text-xs rounded">
                                  {topic.authorRank}
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Last Reply */}
                          <div className="text-right">
                            <div className="text-gray-400 text-sm">
                              Son yanıt: <span className="text-white">{topic.lastReply.user}</span>
                            </div>
                            <div className="text-gray-500 text-xs">{topic.lastReply.time}</div>
                          </div>
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="flex flex-col items-center space-y-4 text-center min-w-0">
                        <div>
                          <div className="text-white font-bold text-lg">{topic.replies}</div>
                          <div className="text-gray-400 text-sm">Yanıt</div>
                        </div>
                        <div>
                          <div className="text-white font-bold text-lg">{topic.views.toLocaleString()}</div>
                          <div className="text-gray-400 text-sm">Görüntülenme</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center">
                <button className="bg-gray-800/80 hover:bg-gray-700/80 text-white px-6 py-3 rounded-lg border border-gray-600 hover:border-gray-500 transition-all duration-300">
                  Daha Fazla Konu Yükle
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              
              {/* Category Stats */}
              <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg border border-gray-600 p-6">
                <h3 className="text-white font-bold mb-4 flex items-center">
                  <Activity className="w-5 h-5 mr-2 text-orange-500" />
                  Kategori İstatistikleri
                </h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Toplam Konu</span>
                    <span className="text-white font-bold">{category?.topics.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Toplam Mesaj</span>
                    <span className="text-white font-bold">{category?.posts.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Bugün Yeni</span>
                    <span className="text-green-400 font-bold">+47</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Bu Hafta</span>
                    <span className="text-blue-400 font-bold">+312</span>
                  </div>
                </div>
              </div>

              {/* Active Users */}
              <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg border border-gray-600 p-6">
                <h3 className="text-white font-bold mb-4 flex items-center">
                  <Users className="w-5 h-5 mr-2 text-orange-500" />
                  Aktif Kullanıcılar
                </h3>
                
                <div className="space-y-3">
                  {onlineUsers.map((user, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="relative">
                          <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                            {user.name.charAt(0)}
                          </div>
                          <div className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-gray-800 ${
                            user.status === 'online' ? 'bg-green-500' : 'bg-yellow-500'
                          }`}></div>
                        </div>
                        <div>
                          <div className={`font-medium text-sm ${
                            user.role === 'admin' ? 'text-red-400' :
                            user.role === 'moderator' ? 'text-blue-400' :
                            user.role === 'veteran' ? 'text-purple-400' :
                            'text-white'
                          }`}>
                            {user.name}
                          </div>
                          <div className="text-gray-400 text-xs">Lvl {user.level}</div>
                        </div>
                      </div>
                      
                      {user.role === 'admin' && (
                        <Crown className="w-4 h-4 text-red-400" />
                      )}
                      {user.role === 'moderator' && (
                        <Shield className="w-4 h-4 text-blue-400" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg border border-gray-600 p-6">
                <h3 className="text-white font-bold mb-4">Hızlı İşlemler</h3>
                
                <div className="space-y-3">
                  <button className="w-full bg-gradient-to-r from-orange-600/20 to-red-600/20 hover:from-orange-600/30 hover:to-red-600/30 text-orange-400 py-3 px-4 rounded-lg border border-orange-500/30 hover:border-orange-500/50 transition-all duration-300">
                    <span className="flex items-center justify-center space-x-2">
                      <Bell className="w-4 h-4" />
                      <span>Kategoriyi Takip Et</span>
                    </span>
                  </button>
                  
                  <button className="w-full bg-gray-700/50 hover:bg-gray-600/50 text-white py-3 px-4 rounded-lg border border-gray-600 hover:border-gray-500 transition-all duration-300">
                    <span className="flex items-center justify-center space-x-2">
                      <Bookmark className="w-4 h-4" />
                      <span>Favorilere Ekle</span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Main Forum View
  return (
    <div className="min-h-screen bg-gray-900">
      
      {/* Header */}
      <header className="bg-gray-900/95 backdrop-blur-sm border-b border-gray-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button 
                onClick={onBack}
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors group"
              >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                <span>Ana Sayfaya Dön</span>
              </button>
              
              <div className="text-2xl font-bold text-white tracking-wider font-mono">
                CİNAYET FORUM
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Forum'da ara..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 pl-10 pr-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500/50"
                />
              </div>
              
              <button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
                <span className="flex items-center space-x-2">
                  <Edit3 className="w-4 h-4" />
                  <span>Yeni Konu</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop"
            alt="Forum Background"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/80 to-gray-900/90"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-red-600/20 to-orange-600/20 border border-orange-500/50 rounded-full px-6 py-3 backdrop-blur-sm mb-6">
            <MessageCircle className="w-6 h-6 text-orange-500" />
            <span className="text-orange-300 font-bold">TÜRKİYE'NİN EN BÜYÜK OYUNCU TOPLULUĞU</span>
            <Users className="w-6 h-6 text-red-500" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            CİNAYET FORUM
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            80,000+ oyuncuyla birlikte stratejilerinizi paylaşın, çete kurun ve imparatorluğunuzu büyütün
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {[
              { label: "Toplam Üye", value: "80.2K", icon: <Users className="w-6 h-6" /> },
              { label: "Çevrimiçi", value: "12.5K", icon: <Activity className="w-6 h-6" /> },
              { label: "Konular", value: "45.8K", icon: <MessageSquare className="w-6 h-6" /> },
              { label: "Mesajlar", value: "1.2M", icon: <MessageCircle className="w-6 h-6" /> }
            ].map((stat, index) => (
              <div key={index} className="bg-gray-800/60 backdrop-blur-sm rounded-lg p-4 border border-gray-600">
                <div className="text-orange-400 mb-2 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-white font-bold text-lg">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Categories List */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-white">Forum Kategorileri</h2>
              
              <div className="flex items-center space-x-3">
                <select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  className="px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/50"
                >
                  <option value="all">Tüm Kategoriler</option>
                  <option value="active">Aktif</option>
                  <option value="official">Resmi</option>
                  <option value="popular">Popüler</option>
                </select>
              </div>
            </div>
            
            <div className="space-y-4">
              {categories.map((category) => (
                <div
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`bg-gray-800/80 backdrop-blur-sm rounded-lg border border-gray-600 hover:border-orange-500/50 p-6 transition-all duration-300 cursor-pointer group ${
                    category.isOfficial ? 'ring-2 ring-red-500/20' : ''
                  }`}
                >
                  <div className="flex items-center justify-between">
                    
                    {/* Category Info */}
                    <div className="flex items-center space-x-4 flex-1">
                      <div className={`p-4 rounded-lg bg-gradient-to-r ${category.bgColor} border ${category.borderColor}`}>
                        <div className={category.color}>
                          {category.icon}
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-white font-bold text-lg group-hover:text-orange-400 transition-colors">
                            {category.name}
                          </h3>
                          {category.isOfficial && (
                            <div className="bg-red-600/20 text-red-400 px-2 py-1 rounded text-xs font-bold border border-red-500/30">
                              RESMİ
                            </div>
                          )}
                        </div>
                        <p className="text-gray-400 mb-3">{category.description}</p>
                        
                        {/* Last Post */}
                        <div className="flex items-center space-x-2 text-sm">
                          <span className="text-gray-500">Son mesaj:</span>
                          <span className="text-white font-medium">{category.lastPost.user}</span>
                          <span className="text-gray-500">•</span>
                          <span className="text-gray-400">{category.lastPost.time}</span>
                        </div>
                        <div className="text-gray-300 text-sm truncate">{category.lastPost.title}</div>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center space-x-8 text-center">
                      <div>
                        <div className="text-white font-bold text-xl">{category.topics.toLocaleString()}</div>
                        <div className="text-gray-400 text-sm">Konu</div>
                      </div>
                      <div>
                        <div className="text-white font-bold text-xl">{category.posts.toLocaleString()}</div>
                        <div className="text-gray-400 text-sm">Mesaj</div>
                      </div>
                      <div className="text-gray-400">
                        <ChevronRight className="w-5 h-5 group-hover:text-orange-400 group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            
            {/* Forum Stats */}
            <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg border border-gray-600 p-6">
              <h3 className="text-white font-bold mb-4 flex items-center">
                <Trophy className="w-5 h-5 mr-2 text-orange-500" />
                Forum İstatistikleri
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Toplam Üye</span>
                  <span className="text-white font-bold">80.247</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Çevrimiçi</span>
                  <span className="text-green-400 font-bold">12.507</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Bugün Kayıt</span>
                  <span className="text-blue-400 font-bold">+156</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">En Çok Çevrimiçi</span>
                  <span className="text-yellow-400 font-bold">18.394</span>
                </div>
              </div>
            </div>

            {/* Top Contributors */}
            <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg border border-gray-600 p-6">
              <h3 className="text-white font-bold mb-4 flex items-center">
                <Star className="w-5 h-5 mr-2 text-orange-500" />
                En Aktif Üyeler
              </h3>
              
              <div className="space-y-3">
                {[
                  { name: 'ForumKralı', posts: 15420, level: 89, trend: '+127' },
                  { name: 'MesajUstası', posts: 12856, level: 76, trend: '+89' },
                  { name: 'TartışmacıAbi', posts: 9874, level: 68, trend: '+64' },
                  { name: 'BilgiYayıcı', posts: 8456, level: 59, trend: '+45' },
                  { name: 'YardımSever', posts: 7234, level: 54, trend: '+38' }
                ].map((user, index) => (
                  <div key={index} className={`flex items-center justify-between p-3 rounded-lg ${
                    index === 0 ? 'bg-orange-600/10 border border-orange-500/20' :
                    index === 1 ? 'bg-gray-600/10 border border-gray-500/20' :
                    index === 2 ? 'bg-amber-600/10 border border-amber-500/20' :
                    'bg-gray-700/30'
                  }`}>
                    <div className="flex items-center space-x-3">
                      <div className={`text-sm font-bold ${
                        index === 0 ? 'text-orange-500' : 
                        index === 1 ? 'text-gray-300' : 
                        index === 2 ? 'text-amber-600' : 
                        'text-gray-400'
                      }`}>
                        #{index + 1}
                      </div>
                      <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        {user.name.charAt(0)}
                      </div>
                      <div>
                        <div className="text-white font-medium text-sm">{user.name}</div>
                        <div className="text-gray-400 text-xs">Lvl {user.level}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-white font-bold text-sm">{user.posts.toLocaleString()}</div>
                      <div className="text-green-400 text-xs">{user.trend}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg border border-gray-600 p-6">
              <h3 className="text-white font-bold mb-4 flex items-center">
                <Clock className="w-5 h-5 mr-2 text-orange-500" />
                Son Aktiviteler
              </h3>
              
              <div className="space-y-3">
                {[
                  { user: 'YeniÜye123', action: 'forma katıldı', time: '2 dakika önce', type: 'join' },
                  { user: 'ÇeteReisi', action: 'yeni konu açtı', time: '5 dakika önce', type: 'topic' },
                  { user: 'SavaşçıKral', action: 'mesaj yazdı', time: '8 dakika önce', type: 'reply' },
                  { user: 'AdminEkip', action: 'duyuru yayınladı', time: '15 dakika önce', type: 'announcement' },
                  { user: 'VeteranAsker', action: 'konuyu beğendi', time: '23 dakika önce', type: 'like' }
                ].map((activity, index) => (
                  <div key={index} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700/30 transition-colors">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      activity.type === 'join' ? 'bg-green-600/20 text-green-400' :
                      activity.type === 'topic' ? 'bg-blue-600/20 text-blue-400' :
                      activity.type === 'reply' ? 'bg-purple-600/20 text-purple-400' :
                      activity.type === 'announcement' ? 'bg-red-600/20 text-red-400' :
                      'bg-yellow-600/20 text-yellow-400'
                    }`}>
                      {activity.type === 'join' ? <UserPlus className="w-4 h-4" /> :
                       activity.type === 'topic' ? <MessageSquare className="w-4 h-4" /> :
                       activity.type === 'reply' ? <Reply className="w-4 h-4" /> :
                       activity.type === 'announcement' ? <Megaphone className="w-4 h-4" /> :
                       <ThumbsUp className="w-4 h-4" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-white text-sm">
                        <span className="font-medium">{activity.user}</span> {activity.action}
                      </div>
                      <div className="text-gray-500 text-xs">{activity.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg border border-gray-600 p-6">
              <h3 className="text-white font-bold mb-4">Hızlı Bağlantılar</h3>
              
              <div className="space-y-2">
                <button className="w-full text-left text-gray-300 hover:text-orange-400 py-2 px-3 rounded-lg hover:bg-gray-700/30 transition-all duration-200 flex items-center space-x-2">
                  <FileText className="w-4 h-4" />
                  <span>Forum Kuralları</span>
                </button>
                <button className="w-full text-left text-gray-300 hover:text-orange-400 py-2 px-3 rounded-lg hover:bg-gray-700/30 transition-all duration-200 flex items-center space-x-2">
                  <HelpCircle className="w-4 h-4" />
                  <span>SSS</span>
                </button>
                <button className="w-full text-left text-gray-300 hover:text-orange-400 py-2 px-3 rounded-lg hover:bg-gray-700/30 transition-all duration-200 flex items-center space-x-2">
                  <Users className="w-4 h-4" />
                  <span>Moderatör Ekibi</span>
                </button>
                <button className="w-full text-left text-gray-300 hover:text-orange-400 py-2 px-3 rounded-lg hover:bg-gray-700/30 transition-all duration-200 flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>İletişim</span>
                </button>
                <button className="w-full text-left text-gray-300 hover:text-orange-400 py-2 px-3 rounded-lg hover:bg-gray-700/30 transition-all duration-200 flex items-center space-x-2">
                  <Settings className="w-4 h-4" />
                  <span>Forum Ayarları</span>
                </button>
              </div>
            </div>

            {/* Discord Integration */}
            <div className="bg-gradient-to-r from-indigo-900/20 to-purple-900/20 rounded-lg border border-indigo-500/30 p-6">
              <h3 className="text-white font-bold mb-4 flex items-center">
                <MessageCircle className="w-5 h-5 mr-2 text-indigo-400" />
                Discord Sunucumuz
              </h3>
              
              <p className="text-gray-300 text-sm mb-4">
                Anlık sohbet için Discord sunucumuza katılın! 24/7 aktif topluluk.
              </p>
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-white font-bold">8,247</span>
                  <span className="text-gray-400 text-sm">çevrimiçi</span>
                </div>
                <div className="text-gray-400 text-sm">21,456 üye</div>
              </div>
              
              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-4 rounded-lg font-medium transition-colors">
                Discord'a Katıl
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900/95 backdrop-blur-sm border-t border-gray-700 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Forum Info */}
            <div>
              <div className="text-2xl font-bold text-white tracking-wider font-mono mb-4">
                CİNAYET FORUM
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Türkiye'nin en büyük suç oyunu topluluğu. Stratejilerinizi paylaşın, 
                arkadaşlıklar kurun ve imparatorluğunuzu büyütün.
              </p>
              <div className="flex items-center space-x-4">
                <div className="text-white font-bold">80,247</div>
                <div className="text-gray-400 text-sm">Kayıtlı Üye</div>
              </div>
            </div>

            {/* Quick Stats */}
            <div>
              <h4 className="text-white font-bold mb-4">Forum İstatistikleri</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-orange-400 font-bold text-lg">45.8K</div>
                  <div className="text-gray-400 text-xs">Konular</div>
                </div>
                <div>
                  <div className="text-red-400 font-bold text-lg">1.2M</div>
                  <div className="text-gray-400 text-xs">Mesajlar</div>
                </div>
                <div>
                  <div className="text-green-400 font-bold text-lg">12.5K</div>
                  <div className="text-gray-400 text-xs">Çevrimiçi</div>
                </div>
                <div>
                  <div className="text-blue-400 font-bold text-lg">156</div>
                  <div className="text-gray-400 text-xs">Bugün Yeni</div>
                </div>
              </div>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-white font-bold mb-4">Bağlantılar</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Ana Sayfa</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Oyuna Giriş</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Kayıt Ol</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Forum Kuralları</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Gizlilik Politikası</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-6 mt-8 text-center">
            <div className="text-gray-400 text-sm">
              © 2014-2025 CİNAYET FORUM. Tüm hakları saklıdır. | Made with ❤️ for Turkish gamers
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Registration Page Component
const RegistrationPage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    birthDate: '',
    gender: '',
    country: 'Turkey',
    city: '',
    agreeTerms: false,
    agreeNewsletter: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [passwordStrength, setPasswordStrength] = useState(0);

  const turkishCities = [
    'İstanbul', 'Ankara', 'İzmir', 'Bursa', 'Antalya', 'Adana', 'Konya', 
    'Şanlıurfa', 'Gaziantep', 'Kocaeli', 'Mersin', 'Diyarbakır', 'Hatay',
    'Manisa', 'Kayseri', 'Samsun', 'Balıkesir', 'Kahramanmaraş', 'Van',
    'Aydın', 'Denizli', 'Sakarya', 'Muğla', 'Eskişehir', 'Tekirdağ'
  ];

  const calculatePasswordStrength = (password: string) => {
    let strength = 0;
    if (password.length >= 8) strength += 25;
    if (/[A-Z]/.test(password)) strength += 25;
    if (/[0-9]/.test(password)) strength += 25;
    if (/[^A-Za-z0-9]/.test(password)) strength += 25;
    return strength;
  };

  useEffect(() => {
    setPasswordStrength(calculatePasswordStrength(formData.password));
  }, [formData.password]);

  const validateField = (name: string, value: string) => {
    const newErrors = { ...errors };

    switch (name) {
      case 'username':
        if (!value) {
          newErrors.username = 'Kullanıcı adı gereklidir';
        } else if (value.length < 3) {
          newErrors.username = 'Kullanıcı adı en az 3 karakter olmalıdır';
        } else if (value.length > 20) {
          newErrors.username = 'Kullanıcı adı en fazla 20 karakter olmalıdır';
        } else if (!/^[a-zA-Z0-9_]+$/.test(value)) {
          newErrors.username = 'Sadece harf, rakam ve alt çizgi kullanabilirsiniz';
        } else {
          delete newErrors.username;
        }
        break;

      case 'email':
        if (!value) {
          newErrors.email = 'E-posta adresi gereklidir';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          newErrors.email = 'Geçerli bir e-posta adresi giriniz';
        } else {
          delete newErrors.email;
        }
        break;

      case 'password':
        if (!value) {
          newErrors.password = 'Şifre gereklidir';
        } else if (value.length < 8) {
          newErrors.password = 'Şifre en az 8 karakter olmalıdır';
        } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(value)) {
          newErrors.password = 'Şifre büyük harf, küçük harf ve rakam içermelidir';
        } else {
          delete newErrors.password;
        }
        break;

      case 'confirmPassword':
        if (!value) {
          newErrors.confirmPassword = 'Şifre tekrarı gereklidir';
        } else if (value !== formData.password) {
          newErrors.confirmPassword = 'Şifreler eşleşmiyor';
        } else {
          delete newErrors.confirmPassword;
        }
        break;

      case 'birthDate':
        if (!value) {
          newErrors.birthDate = 'Doğum tarihi gereklidir';
        } else {
          const birthYear = new Date(value).getFullYear();
          const currentYear = new Date().getFullYear();
          const age = currentYear - birthYear;
          if (age < 13) {
            newErrors.birthDate = 'En az 13 yaşında olmalısınız';
          } else if (age > 100) {
            newErrors.birthDate = 'Geçerli bir doğum tarihi giriniz';
          } else {
            delete newErrors.birthDate;
          }
        }
        break;

      default:
        break;
    }

    setErrors(newErrors);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    if (type !== 'checkbox') {
      validateField(name, value);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate all fields
    Object.keys(formData).forEach(key => {
      if (key !== 'agreeTerms' && key !== 'agreeNewsletter') {
        validateField(key, formData[key as keyof typeof formData] as string);
      }
    });

    // Check terms agreement
    if (!formData.agreeTerms) {
      setErrors(prev => ({ ...prev, agreeTerms: 'Kullanım şartlarını kabul etmelisiniz' }));
    }

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      // Handle success
      alert('Kayıt başarılı! Hoş geldiniz!');
    }, 2000);
  };

  const getPasswordStrengthColor = () => {
    if (passwordStrength < 25) return 'bg-red-500';
    if (passwordStrength < 50) return 'bg-orange-500';
    if (passwordStrength < 75) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const getPasswordStrengthText = () => {
    if (passwordStrength < 25) return 'Zayıf';
    if (passwordStrength < 50) return 'Orta';
    if (passwordStrength < 75) return 'İyi';
    return 'Güçlü';
  };

  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src="https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Registration Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-900/90 to-black/95"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 via-transparent to-orange-900/20"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 bg-black/30 backdrop-blur-sm border-b border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={onBack}
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span>Ana Sayfaya Dön</span>
            </button>
            
            <div className="text-2xl font-bold text-white tracking-wider font-mono">
              CİNAYET
            </div>

            <div className="flex items-center space-x-2 text-gray-400">
              <UserCheck className="w-5 h-5" />
              <span className="text-sm">Güvenli Kayıt</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen pt-20 pb-12 px-4">
        <div className="w-full max-w-2xl">
          
          {/* Registration Card */}
          <div className="bg-gray-800/80 backdrop-blur-lg rounded-2xl border border-gray-600/50 shadow-2xl overflow-hidden">
            
            {/* Header */}
            <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 border-b border-gray-600/50 p-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mb-4 shadow-lg">
                  <UserPlus className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-3xl font-bold text-white mb-2">Suça Katıl</h1>
                <p className="text-gray-300">Türkiye'nin en büyük suç imparatorluğuna üye ol</p>
              </div>
            </div>

            {/* Form */}
            <div className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Progress Steps */}
                <div className="flex items-center justify-center mb-8">
                  {[1, 2, 3].map((step) => (
                    <div key={step} className="flex items-center">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm border-2 transition-all duration-300 ${
                        currentStep >= step 
                          ? 'bg-gradient-to-r from-orange-500 to-red-500 border-orange-500 text-white' 
                          : 'border-gray-600 text-gray-400'
                      }`}>
                        {currentStep > step ? <Check className="w-5 h-5" /> : step}
                      </div>
                      {step < 3 && (
                        <div className={`w-16 h-1 mx-2 rounded transition-colors duration-300 ${
                          currentStep > step ? 'bg-gradient-to-r from-orange-500 to-red-500' : 'bg-gray-600'
                        }`} />
                      )}
                    </div>
                  ))}
                </div>

                {/* Step 1: Basic Info */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <div className="text-center mb-6">
                      <h2 className="text-xl font-bold text-white mb-2">Temel Bilgiler</h2>
                      <p className="text-gray-400 text-sm">Hesabının temelini oluşturalım</p>
                    </div>

                    {/* Username */}
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-white">
                        Kullanıcı Adı
                        <span className="text-red-400 ml-1">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <User className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="text"
                          name="username"
                          value={formData.username}
                          onChange={handleInputChange}
                          className={`w-full pl-12 pr-4 py-3 bg-gray-700/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 ${
                            errors.username 
                              ? 'border-red-500 focus:ring-red-500/50' 
                              : 'border-gray-600 focus:border-orange-500 focus:ring-orange-500/50'
                          }`}
                          placeholder="Kullanıcı adınızı girin"
                        />
                        {formData.username && !errors.username && (
                          <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
                            <CheckCircle2 className="h-5 w-5 text-green-400" />
                          </div>
                        )}
                      </div>
                      {errors.username && (
                        <p className="text-red-400 text-sm flex items-center">
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {errors.username}
                        </p>
                      )}
                      <div className="text-xs text-gray-400">
                        3-20 karakter, sadece harf, rakam ve alt çizgi
                      </div>
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-white">
                        E-posta Adresi
                        <span className="text-red-400 ml-1">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <Mail className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`w-full pl-12 pr-4 py-3 bg-gray-700/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 ${
                            errors.email 
                              ? 'border-red-500 focus:ring-red-500/50' 
                              : 'border-gray-600 focus:border-orange-500 focus:ring-orange-500/50'
                          }`}
                          placeholder="ornek@email.com"
                        />
                        {formData.email && !errors.email && (
                          <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
                            <CheckCircle2 className="h-5 w-5 text-green-400" />
                          </div>
                        )}
                      </div>
                      {errors.email && (
                        <p className="text-red-400 text-sm flex items-center">
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Password */}
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-white">
                        Şifre
                        <span className="text-red-400 ml-1">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <KeyRound className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type={showPassword ? "text" : "password"}
                          name="password"
                          value={formData.password}
                          onChange={handleInputChange}
                          className={`w-full pl-12 pr-12 py-3 bg-gray-700/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 ${
                            errors.password 
                              ? 'border-red-500 focus:ring-red-500/50' 
                              : 'border-gray-600 focus:border-orange-500 focus:ring-orange-500/50'
                          }`}
                          placeholder="Güçlü bir şifre oluşturun"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-white transition-colors"
                        >
                          {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                        </button>
                      </div>
                      
                      {/* Password Strength */}
                      {formData.password && (
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-400">Şifre Gücü:</span>
                            <span className={`text-xs font-medium ${
                              passwordStrength < 25 ? 'text-red-400' :
                              passwordStrength < 50 ? 'text-orange-400' :
                              passwordStrength < 75 ? 'text-yellow-400' :
                              'text-green-400'
                            }`}>
                              {getPasswordStrengthText()}
                            </span>
                          </div>
                          <div className="w-full bg-gray-600 rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full transition-all duration-300 ${getPasswordStrengthColor()}`}
                              style={{ width: `${passwordStrength}%` }}
                            />
                          </div>
                        </div>
                      )}
                      
                      {errors.password && (
                        <p className="text-red-400 text-sm flex items-center">
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {errors.password}
                        </p>
                      )}
                    </div>

                    {/* Confirm Password */}
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-white">
                        Şifre Tekrarı
                        <span className="text-red-400 ml-1">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <Lock className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type={showConfirmPassword ? "text" : "password"}
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleInputChange}
                          className={`w-full pl-12 pr-12 py-3 bg-gray-700/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 ${
                            errors.confirmPassword 
                              ? 'border-red-500 focus:ring-red-500/50' 
                              : 'border-gray-600 focus:border-orange-500 focus:ring-orange-500/50'
                          }`}
                          placeholder="Şifrenizi tekrar girin"
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-white transition-colors"
                        >
                          {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                        </button>
                        {formData.confirmPassword && formData.password === formData.confirmPassword && (
                          <div className="absolute inset-y-0 right-12 pr-2 flex items-center">
                            <CheckCircle2 className="h-5 w-5 text-green-400" />
                          </div>
                        )}
                      </div>
                      {errors.confirmPassword && (
                        <p className="text-red-400 text-sm flex items-center">
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {errors.confirmPassword}
                        </p>
                      )}
                    </div>

                    {/* Next Button */}
                    <button
                      type="button"
                      onClick={() => setCurrentStep(2)}
                      disabled={!formData.username || !formData.email || !formData.password || !formData.confirmPassword || Object.keys(errors).length > 0}
                      className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 disabled:from-gray-600 disabled:to-gray-700 text-white py-3 px-6 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
                    >
                      <span className="flex items-center justify-center space-x-2">
                        <span>Devam Et</span>
                        <ArrowRight className="w-5 h-5" />
                      </span>
                    </button>
                  </div>
                )}

                {/* Step 2: Personal Info */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <div className="text-center mb-6">
                      <h2 className="text-xl font-bold text-white mb-2">Kişisel Bilgiler</h2>
                      <p className="text-gray-400 text-sm">Profilini tamamlayalım</p>
                    </div>

                    {/* Birth Date */}
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-white">
                        Doğum Tarihi
                        <span className="text-red-400 ml-1">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <CalendarIcon className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="date"
                          name="birthDate"
                          value={formData.birthDate}
                          onChange={handleInputChange}
                          max={new Date(Date.now() - 13 * 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]}
                          className={`w-full pl-12 pr-4 py-3 bg-gray-700/50 border rounded-lg text-white focus:outline-none focus:ring-2 transition-all duration-300 ${
                            errors.birthDate 
                              ? 'border-red-500 focus:ring-red-500/50' 
                              : 'border-gray-600 focus:border-orange-500 focus:ring-orange-500/50'
                          }`}
                        />
                      </div>
                      {errors.birthDate && (
                        <p className="text-red-400 text-sm flex items-center">
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {errors.birthDate}
                        </p>
                      )}
                    </div>

                    {/* Gender */}
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-white">Cinsiyet</label>
                      <div className="grid grid-cols-3 gap-3">
                        {[
                          { value: 'male', label: 'Erkek', icon: '👨' },
                          { value: 'female', label: 'Kadın', icon: '👩' },
                          { value: 'other', label: 'Diğer', icon: '👤' }
                        ].map(option => (
                          <button
                            key={option.value}
                            type="button"
                            onClick={() => setFormData(prev => ({ ...prev, gender: option.value }))}
                            className={`p-3 rounded-lg border-2 transition-all duration-300 ${
                              formData.gender === option.value
                                ? 'border-orange-500 bg-orange-500/20 text-white'
                                : 'border-gray-600 bg-gray-700/30 text-gray-300 hover:border-gray-500'
                            }`}
                          >
                            <div className="text-2xl mb-1">{option.icon}</div>
                            <div className="text-sm font-medium">{option.label}</div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Country & City */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-white">Ülke</label>
                        <select
                          name="country"
                          value={formData.country}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:border-orange-500 focus:ring-orange-500/50 transition-all duration-300"
                        >
                          <option value="Turkey">🇹🇷 Türkiye</option>
                          <option value="Other">🌍 Diğer</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-white">Şehir</label>
                        <select
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:border-orange-500 focus:ring-orange-500/50 transition-all duration-300"
                        >
                          <option value="">Şehir seçin</option>
                          {turkishCities.map(city => (
                            <option key={city} value={city}>{city}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Navigation */}
                    <div className="flex space-x-4">
                      <button
                        type="button"
                        onClick={() => setCurrentStep(1)}
                        className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-3 px-6 rounded-lg font-medium transition-colors"
                      >
                        <span className="flex items-center justify-center space-x-2">
                          <ArrowLeft className="w-4 h-4" />
                          <span>Geri</span>
                        </span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setCurrentStep(3)}
                        className="flex-1 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white py-3 px-6 rounded-lg font-bold transition-all duration-300 transform hover:scale-105"
                      >
                        <span className="flex items-center justify-center space-x-2">
                          <span>Devam Et</span>
                          <ArrowRight className="w-5 h-5" />
                        </span>
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 3: Terms & Confirmation */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <div className="text-center mb-6">
                      <h2 className="text-xl font-bold text-white mb-2">Son Adım</h2>
                      <p className="text-gray-400 text-sm">Kullanım şartları ve hesap oluşturma</p>
                    </div>

                    {/* Account Summary */}
                    <div className="bg-gradient-to-r from-gray-700/40 to-gray-800/40 rounded-lg p-6 border border-gray-600/50">
                      <h3 className="text-white font-bold mb-4 flex items-center">
                        <Info className="w-5 h-5 mr-2 text-blue-400" />
                        Hesap Özeti
                      </h3>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-400">Kullanıcı Adı:</span>
                          <div className="text-white font-medium">{formData.username}</div>
                        </div>
                        <div>
                          <span className="text-gray-400">E-posta:</span>
                          <div className="text-white font-medium">{formData.email}</div>
                        </div>
                        <div>
                          <span className="text-gray-400">Cinsiyet:</span>
                          <div className="text-white font-medium">
                            {formData.gender === 'male' ? 'Erkek' : 
                             formData.gender === 'female' ? 'Kadın' : 
                             formData.gender === 'other' ? 'Diğer' : 'Belirtilmemiş'}
                          </div>
                        </div>
                        <div>
                          <span className="text-gray-400">Şehir:</span>
                          <div className="text-white font-medium">{formData.city || 'Belirtilmemiş'}</div>
                        </div>
                      </div>
                    </div>

                    {/* Terms and Conditions */}
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <input
                          type="checkbox"
                          id="agreeTerms"
                          name="agreeTerms"
                          checked={formData.agreeTerms}
                          onChange={handleInputChange}
                          className="mt-1 w-5 h-5 text-orange-500 bg-gray-700 border-gray-600 rounded focus:ring-orange-500 focus:ring-2"
                        />
                        <label htmlFor="agreeTerms" className="text-sm text-gray-300 leading-relaxed">
                          <span className="text-red-400">*</span> 
                          <span className="text-orange-400 hover:text-orange-300 cursor-pointer"> Kullanım Şartları</span>, 
                          <span className="text-orange-400 hover:text-orange-300 cursor-pointer"> Gizlilik Politikası</span> ve 
                          <span className="text-orange-400 hover:text-orange-300 cursor-pointer"> Çerez Politikası</span>'nı okudum ve kabul ediyorum.
                        </label>
                      </div>
                      {errors.agreeTerms && (
                        <p className="text-red-400 text-sm flex items-center ml-8">
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {errors.agreeTerms}
                        </p>
                      )}

                      <div className="flex items-start space-x-3">
                        <input
                          type="checkbox"
                          id="agreeNewsletter"
                          name="agreeNewsletter"
                          checked={formData.agreeNewsletter}
                          onChange={handleInputChange}
                          className="mt-1 w-5 h-5 text-orange-500 bg-gray-700 border-gray-600 rounded focus:ring-orange-500 focus:ring-2"
                        />
                        <label htmlFor="agreeNewsletter" className="text-sm text-gray-300 leading-relaxed">
                          Oyun güncellemeleri, etkinlikler ve özel teklifler hakkında e-posta almak istiyorum.
                        </label>
                      </div>
                    </div>

                    {/* Security Notice */}
                    <div className="bg-gradient-to-r from-blue-900/20 to-blue-800/20 border border-blue-500/30 rounded-lg p-4">
                      <div className="flex items-start space-x-3">
                        <Shield className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="text-blue-400 font-bold text-sm mb-2">Güvenlik Bildirimi</h4>
                          <p className="text-gray-300 text-xs leading-relaxed">
                            Hesabınız 256-bit SSL şifreleme ile korunmaktadır. Şifreniz güvenli bir şekilde hash'lenerek saklanır. 
                            Hesap aktiviteleriniz sürekli izlenir ve şüpheli aktivite durumunda bilgilendirilirsiniz.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Navigation */}
                    <div className="flex space-x-4">
                      <button
                        type="button"
                        onClick={() => setCurrentStep(2)}
                        className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-3 px-6 rounded-lg font-medium transition-colors"
                      >
                        <span className="flex items-center justify-center space-x-2">
                          <ArrowLeft className="w-4 h-4" />
                          <span>Geri</span>
                        </span>
                      </button>
                      <button
                        type="submit"
                        disabled={!formData.agreeTerms || isSubmitting}
                        className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 disabled:from-gray-600 disabled:to-gray-700 text-white py-3 px-6 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center space-x-2">
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            <span>Hesap Oluşturuluyor...</span>
                          </span>
                        ) : (
                          <span className="flex items-center justify-center space-x-2">
                            <UserCheck className="w-5 h-5" />
                            <span>Hesabı Oluştur</span>
                          </span>
                        )}
                      </button>
                    </div>
                  </div>
                )}

              </form>
            </div>
          </div>

          {/* Additional Info */}
          <div className="text-center mt-8">
            <p className="text-gray-400 text-sm">
              Zaten hesabın var mı? 
              <button onClick={onBack} className="text-orange-400 hover:text-orange-300 ml-1 font-medium">
                Giriş Yap
              </button>
            </p>
          </div>

          {/* Features Preview */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Crown className="w-8 h-8 text-orange-500" />,
                title: "İmparatorluk Kur",
                description: "Kendi suç imparatorluğunu inşa et ve rakiplerini alt et"
              },
              {
                icon: <Users className="w-8 h-8 text-red-500" />,
                title: "Çete Oluştur",
                description: "Güçlü müttefikler bul ve birlikte hakimiyet sağla"
              },
              {
                icon: <Sword className="w-8 h-8 text-yellow-500" />,
                title: "Savaşa Katıl",
                description: "Stratejik savaşlarda yer al ve şehrini kontrol et"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-800/60 backdrop-blur-sm rounded-lg p-6 border border-gray-600/50 text-center">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-white font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Header Navigation Component
const Header: React.FC<{ onRegisterClick: () => void; onForumClick: () => void }> = ({ onRegisterClick, onForumClick }) => {
  return (
    <header className="bg-gray-900/95 backdrop-blur-sm border-b-2 border-orange-500 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-4xl font-bold text-white tracking-wider font-mono">
            CİNAYET
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex space-x-6">
            <button onClick={onRegisterClick} className="text-gray-300 hover:text-white transition-colors">Kayıt Ol</button>
            <button onClick={onForumClick} className="text-gray-300 hover:text-white transition-colors">Forum</button>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Haberler</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Wiki</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Kurallar</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">İletişim</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Krediler</a>
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <button onClick={onRegisterClick} className="text-gray-300 hover:text-white transition-colors text-sm">
              Hesap Oluştur
            </button>
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors">
              Giriş ↗
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

// Enhanced Hero Section Component
const HeroSection: React.FC<{ onRegisterClick: () => void }> = ({ onRegisterClick }) => {
  const [currentCity, setCurrentCity] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  
  const cities = [
    { name: "İSTANBUL", danger: "YÜKSEK", color: "text-red-400" },
    { name: "ANKARA", danger: "ORTA", color: "text-orange-400" },
    { name: "İZMİR", danger: "DÜŞÜK", color: "text-yellow-400" },
    { name: "BURSA", danger: "YÜKSEK", color: "text-red-400" }
  ];

  const fullText = "İMPARATORLUĞUNU KUR";

  useEffect(() => {
    if (isTyping) {
      const timeout = setTimeout(() => {
        if (typedText.length < fullText.length) {
          setTypedText(fullText.substring(0, typedText.length + 1));
        } else {
          setIsTyping(false);
          setTimeout(() => {
            setTypedText('');
            setIsTyping(true);
          }, 3000);
        }
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [typedText, isTyping]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCity((prev) => (prev + 1) % cities.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Dynamic Background Layers */}
      <div className="absolute inset-0">
        {/* Main Background */}
        <img 
          src="https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Urban Night Scene"
          className="w-full h-full object-cover"
        />
        {/* Overlay Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-gray-900/70 to-black/90"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/30 via-transparent to-orange-900/30"></div>
        
        {/* Animated Grid Overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10 animate-pulse"></div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-orange-500/30 rounded-full animate-pulse"
              style={{
                left:`${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 w-full">
          
          {/* Top Status Bar */}
          <div className="absolute top-24 left-4 right-4 flex justify-between items-center">
            <div className="bg-black/70 backdrop-blur-sm rounded-lg px-4 py-2 border border-orange-500/30">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-orange-400 text-sm font-bold">CANLI</span>
                <span className="text-white text-sm">11,907 OYUNCU</span>
              </div>
            </div>
            
            <div className="bg-black/70 backdrop-blur-sm rounded-lg px-4 py-2 border border-orange-500/30">
              <div className="text-orange-400 text-sm font-bold">
                {cities[currentCity].name} - <span className={cities[currentCity].color}>{cities[currentCity].danger}</span>
              </div>
            </div>
          </div>

          {/* Main Hero Content */}
          <div className="text-center space-y-8">
            
            {/* Title Section */}
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-red-600/20 to-orange-600/20 border border-orange-500/50 rounded-full px-6 py-3 backdrop-blur-sm">
                <Skull className="w-6 h-6 text-orange-500 animate-pulse" />
                <span className="text-orange-300 font-bold">TÜRKİYE'NİN EN BÜYÜK SUÇ İMPARATORLUĞU</span>
                <Flame className="w-6 h-6 text-red-500 animate-pulse" />
              </div>
              
              {/* Typed Subtitle */}
              <div className="h-16 flex items-center justify-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  {typedText}
                  <span className="animate-blink">|</span>
                </h2>
              </div>
            </div>

            {/* Interactive Action Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
              {[
                { icon: <Sword className="w-8 h-8" />, label: "SAVAŞ", count: "15,420", trend: "+12%" },
                { icon: <Crown className="w-8 h-8" />, label: "ÇETE", count: "2,847", trend: "+8%" },
                { icon: <Target className="w-8 h-8" />, label: "SUÇ", count: "87,391", trend: "+25%" },
                { icon: <Shield className="w-8 h-8" />, label: "GÜVENLIK", count: "4,152", trend: "+5%" }
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-600 hover:border-orange-500 rounded-xl p-6 group cursor-pointer transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/20"
                >
                  <div className="text-orange-500 group-hover:text-orange-400 transition-colors mb-3">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.count}</div>
                  <div className="text-sm text-gray-400 mb-2">{stat.label}</div>
                  <div className="text-xs text-green-400 font-medium">{stat.trend}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
                <button 
                  onClick={onRegisterClick}
                  className="group relative bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-12 py-4 rounded-xl text-xl font-bold transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-red-500/50"
                >
                  <span className="flex items-center space-x-3">
                    <Flame className="w-6 h-6" />
                    <span>SUÇA BAŞLA</span>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-orange-600 rounded-xl blur opacity-30 group-hover:opacity-60 transition-opacity"></div>
                </button>
                
                <button className="group border-2 border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white px-12 py-4 rounded-xl text-xl font-bold transition-all duration-300 backdrop-blur-sm">
                  <span className="flex items-center space-x-3">
                    <Play className="w-6 h-6" />
                    <span>NASIL OYNANIR</span>
                  </span>
                </button>
              </div>
              
              {/* Quick Stats Bar */}
              <div className="flex items-center justify-center space-x-8 text-sm">
                <div className="flex items-center space-x-2">
                  <Activity className="w-4 h-4 text-green-500" />
                  <span className="text-gray-300">11,907 Çevrimiçi</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Timer className="w-4 h-4 text-blue-500" />
                  <span className="text-gray-300">24/7 Aktif</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="w-4 h-4 text-purple-500" />
                  <span className="text-gray-300">11 Şehir</span>
                </div>
              </div>
            </div>

          </div>

          {/* Side Panels */}
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 space-y-4 max-w-xs hidden lg:block">
            <div className="bg-black/70 backdrop-blur-sm rounded-lg p-4 border border-red-500/30">
              <h3 className="text-red-400 font-bold text-sm mb-3 flex items-center">
                <AlertTriangle className="w-4 h-4 mr-2" />
                SON SALDIRILAR
              </h3>
              {[
                "MafiaBoss → KatilKral",
                "SilahDealer → HırsızAsi", 
                "BossKadın → SavaşçıX",
                "KartalGözlü → YılanAdam"
              ].map((attack, i) => (
                <div key={i} className="text-xs text-gray-300 mb-1 animate-pulse" style={{ animationDelay: `${i * 0.5}s` }}>
                  {attack}
                </div>
              ))}
            </div>
          </div>

          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 space-y-4 max-w-xs hidden lg:block">
            <div className="bg-black/70 backdrop-blur-sm rounded-lg p-4 border border-orange-500/30">
              <h3 className="text-orange-400 font-bold text-sm mb-3 flex items-center">
                <Trophy className="w-4 h-4 mr-2" />
                TOP ÇETELER
              </h3>
              {[{ name: "KaraKartallar", members: "127" },
                { name: "Ateş Ejderleri", members: "104" }, 
                { name: "Gece Avcıları", members: "98" },
                { name: "Kan Kardeşleri", members: "89" }
              ].map((gang, i) => (
                <div key={i} className="flex justify-between text-xs text-gray-300 mb-1">
                  <span>{gang.name}</span>
                  <span className="text-orange-400">{gang.members}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// City Background Component (Updated for main content)
const CityBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <img 
        src="https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
        alt="City Background"
        className="w-full h-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-900/85 to-gray-900/95"></div>
    </div>
  );
};

// Join Section Component
const JoinSection: React.FC<{ onRegisterClick: () => void }> = ({ onRegisterClick }) => {
  return (
    <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-6 border border-gray-600 hover:border-orange-500/50 transition-all duration-300">
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold text-center py-3 rounded-t mb-4 shadow-lg">
        ⚔️ SUÇLU OL
      </div>
      
      <h3 className="text-white font-bold mb-4 text-lg">Cinayet Hakkında</h3>
      <p className="text-gray-300 text-sm mb-4 leading-relaxed">
        Cinayet, karmaşık ve çok oyunculu gerçekçi suç oyunudur. Karakterini güçlendir, 
        çete kur ve diğer oyuncularla mücadele et. Cinayet'te binlerce aktif oyuncu var.
      </p>
      <p className="text-gray-300 text-sm mb-4 leading-relaxed">
        Cinayet büyük çok oyunculu bir oyundur. Dünya çapında binlerce aktif oyuncu var. 
        Kavgalara katıl, çeteler kur, düşmanların yap, suçlar işle ve kendi imparatorluğunu inşa et.
      </p>
      
      <button 
        onClick={onRegisterClick}
        className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 rounded font-medium transition-colors"
      >
        Hemen Katıl
      </button>
    </div>
  );
};

// Enhanced User Stats Component
const UserStats: React.FC = () => {
  return (
    <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-6 border border-gray-600 hover:border-orange-500/50 transition-all duration-300">
      <h3 className="text-white font-bold mb-4 flex items-center">
        <Eye className="w-5 h-5 mr-2 text-orange-500" />
        Kullanıcılar Çevrimiçi
      </h3>
      
      <div className="grid grid-cols-3 gap-4 text-center mb-4">
        <div>
          <div className="text-gray-400 text-xs">Şu Anda</div>
          <div className="text-white font-bold text-xl">11,907</div>
        </div>
        <div>
          <div className="text-gray-400 text-xs">Geçen Saat</div>
          <div className="text-white font-bold text-xl">25,777</div>
        </div>
        <div>
          <div className="text-gray-400 text-xs">Son 24 Saat</div>
          <div className="text-white font-bold text-xl">80,659</div>
        </div>
      </div>

      <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
        <div className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full w-3/4"></div>
      </div>
      <div className="text-xs text-gray-400 mb-6 text-center">Kapasite: %75</div>
      
      {/* Server Status */}
      <div className="space-y-3">
        <h4 className="text-white font-semibold text-sm flex items-center">
          <Server className="w-4 h-4 mr-2 text-green-500" />
          Sunucu Durumu
        </h4>
        
        <div className="space-y-2">
          {[
            { name: "Ana Sunucu", status: "Çevrimiçi", ping: "12ms", color: "text-green-400" },
            { name: "Savaş Sunucusu", status: "Çevrimiçi", ping: "18ms", color: "text-green-400" },
            { name: "Forum Sunucusu", status: "Çevrimiçi", ping: "8ms", color: "text-green-400" }
          ].map((server, index) => (
            <div key={index} className="flex justify-between items-center text-xs">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-gray-300">{server.name}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className={server.color}>{server.status}</span>
                <span className="text-gray-500">{server.ping}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Network Activity */}
      <div className="mt-6 pt-4 border-t border-gray-700">
        <h4 className="text-white font-semibold text-sm flex items-center mb-3">
          <Wifi className="w-4 h-4 mr-2 text-blue-500" />
          Ağ Aktivitesi
        </h4>
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <div className="text-blue-400 font-bold">1.2GB</div>
            <div className="text-xs text-gray-400">Gelen</div>
          </div>
          <div>
            <div className="text-purple-400 font-bold">840MB</div>
            <div className="text-xs text-gray-400">Giden</div>
          </div>
        </div>
      </div>
    </div>
  );
};

// NEW: Game Classes Component (replaces ProjectStats)
const GameClasses: React.FC = () => {
  const [selectedClass, setSelectedClass] = useState(0);

  const gameClasses = [
    {
      name: "SAVAŞÇI",
      icon: <Sword className="w-8 h-8" />,
      color: "text-red-500",
      bgColor: "from-red-600/20 to-red-800/20",
      borderColor: "border-red-500/50",
      description: "Yakın dövüş uzmanı",
      stats: { güç: 95, çeviklik: 70, savunma: 85, zeka: 50 },
      weapons: ["Kılıç", "Balta", "Çekiç"],
      abilities: ["Güçlü Saldırı", "Kalkan Ustası", "Savaş Çığlığı"],
      bonus: "+25% Yakın Dövüş Hasarı"
    },
    {
      name: "SUIKASTÇI",
      icon: <Target className="w-8 h-8" />,
      color: "text-purple-500",
      bgColor: "from-purple-600/20 to-purple-800/20",
      borderColor: "border-purple-500/50",
      description: "Gizlilik ve hız uzmanı",
      stats: { güç: 75, çeviklik: 95, savunma: 60, zeka: 80 },
      weapons: ["Hançer", "Yay", "Zehirli İğne"],
      abilities: ["Gölge Adımı", "Kritik Vuruş", "Gizlenme"],
      bonus: "+30% Kritik Şansı"
    },
    {
      name: "ÇETECI",
      icon: <Users className="w-8 h-8" />,
      color: "text-orange-500",
      bgColor: "from-orange-600/20 to-orange-800/20",
      borderColor: "border-orange-500/50",
      description: "Liderlik ve organizasyon",
      stats: { güç: 70, çeviklik: 65, savunma: 75, zeka: 90 },
      weapons: ["Tabanca", "Pompalı", "Makineli"],
      abilities: ["Çete Komutası", "Kaynak Yönetimi", "Pazarlık"],
      bonus: "+20% Çete Bonusu"
    },
    {
      name: "KORUYUCU",
      icon: <Shield className="w-8 h-8" />,
      color: "text-blue-500",
      bgColor: "from-blue-600/20 to-blue-800/20",
      borderColor: "border-blue-500/50",
      description: "Savunma ve dayanıklılık",
      stats: { güç: 60, çeviklik: 50, savunma: 95, zeka: 75 },
      weapons: ["Kalkan", "Zırh", "Savunma Kulesi"],
      abilities: ["Kalkan Duvarı", "Hasar Emme", "Koruma Alanı"],
      bonus: "+40% Hasar Azaltma"
    }
  ];

  return (
    <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-6 border border-gray-600 hover:border-orange-500/50 transition-all duration-300">
      <h3 className="text-white font-bold mb-4 flex items-center">
        <Swords className="w-5 h-5 mr-2 text-orange-500" />
        Karakter Sınıfları
      </h3>
      
      {/* Class Selection Tabs */}
      <div className="grid grid-cols-2 gap-2 mb-6">
        {gameClasses.map((gameClass, index) => (
          <button
            key={index}
            onClick={() => setSelectedClass(index)}
            className={`p-3 rounded-lg transition-all duration-300 border ${
              selectedClass === index
                ? `bg-gradient-to-r ${gameClass.bgColor} ${gameClass.borderColor} ${gameClass.color}`
                : 'bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600'
            }`}
          >
            <div className="flex items-center space-x-2">
              <div className={selectedClass === index ? gameClass.color : 'text-gray-400'}>
                {gameClass.icon}
              </div>
              <div>
                <div className="font-bold text-sm">{gameClass.name}</div>
                <div className="text-xs opacity-75">{gameClass.description}</div>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Selected Class Details */}
      <div className={`bg-gradient-to-br ${gameClasses[selectedClass].bgColor} p-4 rounded-lg border ${gameClasses[selectedClass].borderColor} mb-4`}>
        <div className="flex items-center space-x-3 mb-4">
          <div className={gameClasses[selectedClass].color}>
            {gameClasses[selectedClass].icon}
          </div>
          <div>
            <h4 className="text-white font-bold text-lg">{gameClasses[selectedClass].name}</h4>
            <p className="text-gray-300 text-sm">{gameClasses[selectedClass].description}</p>
          </div>
        </div>

        {/* Stats */}
        <div className="space-y-3 mb-4">
          <h5 className="text-white font-semibold text-sm">Özellikler</h5>
          {Object.entries(gameClasses[selectedClass].stats).map(([stat, value]) => (
            <div key={stat} className="space-y-1">
              <div className="flex justify-between text-sm">
                <span className="text-gray-300 capitalize">{stat}</span>
                <span className="text-white font-bold">{value}</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div 
                  className={`bg-gradient-to-r ${gameClasses[selectedClass].bgColor.replace('/20', '')} h-2 rounded-full transition-all duration-1000`}
                  style={{ width: `${value}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bonus */}
        <div className={`bg-black/30 p-3 rounded border border-gray-600 mb-4`}>
          <div className="text-xs text-gray-400 mb-1">ÖZEL BONUS</div>
          <div className={`${gameClasses[selectedClass].color} font-bold text-sm`}>
            {gameClasses[selectedClass].bonus}
          </div>
        </div>

        {/* Weapons & Abilities */}
        <div className="grid grid-cols-1 gap-4">
          <div>
            <h6 className="text-white font-semibold text-sm mb-2">Silahlar</h6>
            <div className="flex flex-wrap gap-1">
              {gameClasses[selectedClass].weapons.map((weapon, i) => (
                <span key={i} className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded">
                  {weapon}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h6 className="text-white font-semibold text-sm mb-2">Yetenekler</h6>
            <div className="flex flex-wrap gap-1">
              {gameClasses[selectedClass].abilities.map((ability,i) => (
                <span key={i} className={`bg-gradient-to-r ${gameClasses[selectedClass].bgColor} text-white text-xs px-2 py-1 rounded border ${gameClasses[selectedClass].borderColor}`}>
                  {ability}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Action */}
      <button className={`w-full bg-gradient-to-r ${gameClasses[selectedClass].bgColor} hover:opacity-80 text-white py-3 rounded-lg font-bold transition-all duration-300 border ${gameClasses[selectedClass].borderColor}`}>
        <span className="flex items-center justify-center space-x-2">
          {gameClasses[selectedClass].icon}
          <span>{gameClasses[selectedClass].name} OLARAK BAŞLA</span>
        </span>
      </button>
    </div>
  );
};

// Enhanced Top Features Component with Square and Gentle Icon Containers
const TopFeatures: React.FC = () => {
  const [selectedFeature, setSelectedFeature] = useState<number | null>(null);

  const features = [
    {
      icon: <User className="w-5 h-5" />,
      name: "Profil Sistemi",
      description: "Karakterini özelleştir ve gelişim sürecini takip et. Deneyim puanları, başarılar ve kişisel istatistiklerin."
    },
    {
      icon: <Users className="w-5 h-5" />,
      name: "Çete Yönetimi", 
      description: "Güçlü çeteler kur, üyelerini yönet ve rakip çetelerle mücadele et. Liderlik yeteneklerini geliştir."
    },
    {
      icon: <Shield className="w-5 h-5" />,
      name: "Savunma Sistemi",
      description: "Kendini ve mülklerini düşmanlardan koru. Gelişmiş güvenlik sistemleri ve koruma stratejileri."
    },
    {
      icon: <Sword className="w-5 h-5" />,
      name: "Saldırı Mekanikleri",
      description: "Düşmanlarına saldır ve bölge kontrolü sağla. Taktiksel savaş planları ve güçlü silah koleksiyonları."
    },
    {
      icon: <Target className="w-5 h-5" />,
      name: "Hedef Sistemi",
      description: "Stratejik hedefler belirle ve görevleri tamamla. Özel misyonlar ve büyük ödüllü operasyonlar."
    },
    {
      icon: <Star className="w-5 h-5" />,
      name: "Değerlendirme",
      description: "Oyuncu performansını analiz et ve gelişim alanlarını keşfet. Detaylı istatistikler ve karşılaştırmalar."
    },
    {
      icon: <Crosshair className="w-5 h-5" />,
      name: "Silah Koleksiyonu",
      description: "Geniş silah yelpazesi ve özel ekipmanlar. Nadir silahlar bul ve savaş gücünü artır."
    },
    {
      icon: <Car className="w-5 h-5" />,
      name: "Araç Garajı",
      description: "Lüks arabalar satın al ve özelleştir. Hızlı kaçış araçları ve prestijli koleksiyonlar."
    },
    {
      icon: <Briefcase className="w-5 h-5" />,
      name: "İş Dünyası",
      description: "Yasal ve yasadışı işlere gir, şirket kur ve gelir kaynaklarını çeşitlendir."
    },
    {
      icon: <Home className="w-5 h-5" />,
      name: "Emlak Sistemi",
      description: "Evler, villalar ve gökdelenler satın al. Emlak imparatorluğunu genişlet ve kira geliri elde et."
    },
    {
      icon: <ShoppingBag className="w-5 h-5" />,
      name: "Market Alışverişi",
      description: "Özel ürünler, ekipmanlar ve lüks eşyalar satın al. Nadir koleksiyonlar ve sınırlı teklifler."
    },
    {
      icon: <Plane className="w-5 h-5" />,
      name: "Seyahat Sistemi",
      description: "11 şehir ve ilginç yerler keşfet. Dünyanın dört bir yanından hizmet, alışveriş ve dünya kültürünü deneyimle."
    },
    {
      icon: <Building className="w-5 h-5" />,
      name: "Şirket İmparatorluğu",
      description: "Büyük şirketler kur ve sektör lideri ol. Ticaret ağları geliştir ve ekonomik güç kazan."
    },
    {
      icon: <Crown className="w-5 h-5" />,
      name: "Liderlik Rolleri",
      description: "Çete liderliği ve bölge kontrolü. Stratejik kararlar al ve imparatorluğunu yönet."
    },
    {
      icon: <Gamepad2 className="w-5 h-5" />,
      name: "Mini Oyunlar",
      description: "Eğlenceli mini oyunlar ve bonus aktiviteler. Kumar, yarış ve beceri testleri ile ek kazanç."
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      name: "Etkinlik Takvimi",
      description: "Özel etkinlikler, turnuvalar ve sezonluk aktiviteler. Sınırlı zamanlı ödüller ve prestijli yarışmalar."
    }
  ];

  return (
    <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-6 border border-gray-600 hover:border-orange-500/50 transition-all duration-300">
      <h3 className="text-white font-bold mb-4 flex items-center">
        <Gamepad2 className="w-5 h-5 mr-2 text-orange-500" />
        Temel Özellikler
      </h3>
      
      <div className="grid grid-cols-8 gap-3 mb-6">
        {features.map((feature, index) => (
          <div
            key={index}
            onClick={() => setSelectedFeature(selectedFeature === index ? null : index)}
            className={`
              bg-gray-700/60 
              hover:bg-gradient-to-br hover:from-orange-500/10 hover:to-red-500/10 
              w-12 h-12
              rounded-lg 
              cursor-pointer 
              transition-all duration-300 
              group 
              relative 
              border
              flex items-center justify-center
              ${
                selectedFeature === index 
                  ? 'border-orange-400/40 bg-gradient-to-br from-orange-500/15 to-red-500/15 shadow-lg shadow-orange-500/10' 
                  : 'border-gray-600/40 hover:border-orange-400/25 hover:shadow-md hover:shadow-orange-500/5'
              }
            `}
            title={feature.name}
          >
            <div className={`transition-colors ${
              selectedFeature === index 
                ? 'text-orange-300' 
                : 'text-gray-300 group-hover:text-orange-300'
            }`}>
              {feature.icon}
            </div>
          </div>
        ))}
      </div>

      {/* Selected Feature Description */}
      {selectedFeature !== null && (
        <div className="bg-gradient-to-r from-gray-700/40 to-gray-800/40 p-4 rounded-lg border border-gray-600/50 mb-4">
          <div className="flex items-center space-x-4">
            <div className="bg-gradient-to-br from-orange-500/80 to-red-500/80 p-3 rounded-lg shadow-lg">
              <div className="text-white">
                {features[selectedFeature].icon}
              </div>
            </div>
            <div className="flex-1">
              <h4 className="text-white font-bold mb-1">{features[selectedFeature].name}</h4>
              <p className="text-gray-300 text-sm">
                {features[selectedFeature].description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Default Featured Section - Only show when no feature is selected */}
      {selectedFeature === null && (
        <div className="bg-gradient-to-r from-gray-700/40 to-gray-800/40 p-4 rounded-lg border border-gray-600/50">
          <div className="flex items-center space-x-4">
            <div className="bg-gradient-to-br from-orange-500/80 to-red-500/80 p-3 rounded-lg shadow-lg">
              <Gamepad2 className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <h4 className="text-white font-bold mb-1">Özellikler Menüsü</h4>
              <p className="text-gray-300 text-sm">
                Yukarıdaki iconlara tıklayarak oyunun farklı özelliklerini keşfet ve detaylı açıklamaları görüntüle.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Global Rank Component
const GlobalRank: React.FC = () => {
  const players = [
    { rank: 1, name: "ched", age: 40, level: 17, improvement: "+7.58%" },
    { rank: 2, name: "Baldr", age: 24, level: 17, improvement: "+3.40%" },
    { rank: 3, name: "Alpha", age: 37, level: 17, improvement: "+1.73%" },
    { rank: 4, name: "Beta", age: 28, level: 14, improvement: "+2.15%" },
    { rank: 5, name: "Gamma", age: 31, level: 19, improvement: "+1.92%" }
  ];

  return (
    <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-6 border border-gray-600 hover:border-orange-500/50 transition-all duration-300">
      <h3 className="text-white font-bold mb-4 flex items-center">
        <Crown className="w-5 h-5 mr-2 text-orange-500" />
        Global Sıralama
      </h3>
      
      <div className="space-y-3">
        <div className="grid grid-cols-4 gap-4 text-xs text-gray-400 font-medium border-b border-gray-700 pb-2">
          <div>Sıra</div>
          <div>Oyuncu</div>
          <div>Yaş</div>
          <div>Gelişim</div>
        </div>
        
        {players.map((player, index) => (
          <div key={player.rank} className="grid grid-cols-4 gap-4 text-sm hover:bg-gray-700/30 p-2 rounded transition-colors">
            <div className={`font-bold ${index === 0 ? 'text-orange-500' : index === 1 ? 'text-gray-300' : index === 2 ? 'text-amber-600' : 'text-gray-400'}`}>
              #{player.rank}
            </div>
            <div className="text-white">{player.name}</div>
            <div className="text-gray-300">{player.age}</div>
            <div className="text-green-400 font-medium">{player.improvement}</div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 text-center">
        <button className="text-gray-400 hover:text-orange-400 text-sm transition-colors border border-gray-600 hover:border-orange-500 px-4 py-2 rounded">
          👑 Aylık Sıralama
        </button>
      </div>
    </div>
  );
};

// FIXED: Clan Rankings Component with improved layout
const ClanRankings: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState(0);
  
  const periods = ["Günlük", "Haftalık", "Aylık", "Tüm Zamanlar"];
  
  const clans = [
    {
      rank: 1,
      name: "KaraKartallar",
      logo: "🦅",
      members: 127,
      power: 94580,
      territories: 8,
      leader: "KartalKomutan",
      wars: { won: 23, lost: 3 },
      trend: "+15.2%"
    },
    {
      rank: 2,
      name: "Ateş Ejderleri", 
      logo: "🐲",
      members: 104,
      power: 89210,
      territories: 7,
      leader: "EjderKral",
      wars: { won: 19, lost: 5 },
      trend: "+12.8%"
    },
    {
      rank: 3,
      name: "Gece Avcıları",
      logo: "🌙",
      members: 98,
      power: 78950,
      territories: 6,
      leader: "GeceReis", 
      wars: { won: 17, lost: 4 },
      trend: "+9.5%"
    },
    {
      rank: 4,
      name: "Kan Kardeşleri",
      logo: "⚔️",
      members: 89,
      power: 71430,
      territories: 5,
      leader: "KanlıKhan",
      wars: { won: 15, lost: 6 },
      trend: "+7.3%"
    },
    {
      rank: 5,
      name: "Demir Pençe",
      logo: "🔥",
      members: 82,
      power: 65780,
      territories: 4,
      leader: "DemirLord",
      wars: { won: 12, lost: 8 },
      trend: "+5.1%"
    }
  ];

  return (
    <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-6 border border-gray-600 hover:border-orange-500/50 transition-all duration-300">
      <h3 className="text-white font-bold mb-4 flex items-center">
        <Users className="w-5 h-5 mr-2 text-orange-500" />
        Clan Sıralamaları
      </h3>
      
      {/* Period Selection */}
      <div className="flex space-x-1 mb-6 bg-gray-700/30 rounded-lg p-1">
        {periods.map((period, index) => (
          <button
            key={index}
            onClick={() => setSelectedPeriod(index)}
            className={`flex-1 py-2 px-2 rounded-md text-xs font-medium transition-all duration-300 ${
              selectedPeriod === index
                ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg'
                : 'text-gray-300 hover:text-white hover:bg-gray-600/50'
            }`}
          >
            {period}
          </button>
        ))}
      </div>

      {/* Rankings List - Simplified Layout */}
      <div className="space-y-3 mb-6">
        {clans.map((clan, index) => (
          <div 
            key={clan.rank} 
            className={`p-4 rounded-lg border transition-all duration-300 hover:border-orange-500/50 ${
              index === 0 ? 'bg-gradient-to-r from-yellow-900/20 to-orange-900/20 border-orange-500/30' :
              index === 1 ? 'bg-gradient-to-r from-gray-600/20 to-gray-700/20 border-gray-500/30' :
              index === 2 ? 'bg-gradient-to-r from-amber-900/20 to-orange-800/20 border-amber-600/30' :
              'bg-gray-700/30 border-gray-600/30'
            }`}
          >
            {/* Top Row - Rank, Logo, Name */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div className={`text-xl font-bold ${
                  index === 0 ? 'text-orange-500' : 
                  index === 1 ? 'text-gray-300' : 
                  index === 2 ? 'text-amber-600' : 
                  'text-gray-400'
                }`}>
                  #{clan.rank}
                </div>
                <div className="text-2xl">{clan.logo}</div>
                <div>
                  <div className="text-white font-bold text-sm">{clan.name}</div>
                  <div className="text-gray-400 text-xs">Lider: {clan.leader}</div>
                </div>
              </div>
              <div className="text-green-400 font-bold text-sm">{clan.trend}</div>
            </div>

            {/* Bottom Row - Stats Grid */}
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-white font-bold text-sm">{clan.power.toLocaleString()}</div>
                <div className="text-xs text-gray-400">Güç</div>
              </div>
              <div>
                <div className="text-white font-bold text-sm">{clan.members}</div>
                <div className="text-xs text-gray-400">Üye</div>
              </div>
              <div>
                <div className="text-white font-bold text-sm">{clan.territories}</div>
                <div className="text-xs text-gray-400">Bölge</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* War Statistics */}
      <div className="bg-gradient-to-r from-red-900/20 to-orange-900/20 p-4 rounded-lg border border-red-500/30 mb-4">
        <h4 className="text-red-400 font-bold text-sm mb-3 flex items-center">
          <Swords className="w-4 h-4 mr-2" />
          Aktif Savaşlar
        </h4>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-red-400 font-bold text-lg">12</div>
            <div className="text-xs text-gray-400">Devam Eden</div>
          </div>
          <div>
            <div className="text-orange-400 font-bold text-lg">47</div>
            <div className="text-xs text-gray-400">Bu Hafta</div>
          </div>
          <div>
            <div className="text-yellow-400 font-bold text-lg">189</div>
            <div className="text-xs text-gray-400">Bu Ay</div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-3">
        <button className="bg-gradient-to-r from-orange-600/20 to-red-600/20 hover:from-orange-600/30 hover:to-red-600/30 text-orange-400 py-3 px-4 rounded-lg font-bold transition-all duration-300 border border-orange-500/30 hover:border-orange-500/50 text-xs">
          <span className="flex items-center justify-center space-x-2">
            <Users className="w-4 h-4" />
            <span>Clan Kur</span>
          </span>
        </button>
        
        <button className="bg-gradient-to-r from-red-600/20 to-orange-600/20 hover:from-red-600/30 hover:to-orange-600/30 text-red-400 py-3 px-4 rounded-lg font-bold transition-all duration-300 border border-red-500/30 hover:border-red-500/50 text-xs">
          <span className="flex items-center justify-center space-x-2">
            <Sword className="w-4 h-4" />
            <span>Savaş İlan Et</span>
          </span>
        </button>
      </div>
    </div>
  );
};

// PathSelection Component
const PathSelection: React.FC = () => {
  const paths = [
    { name: "Çete", icon: <Users className="w-6 h-6" />, description: "Liderlik" },
    { name: "Silahlar", icon: <Crosshair className="w-6 h-6" />, description: "Güç" },
    { name: "İttifak", icon: <MessageCircle className="w-6 h-6" />, description: "Strateji" },
    { name: "Saldırı", icon: <Sword className="w-6 h-6" />, description: "Savaş" },
    { name: "Hırsızlık", icon: <Target className="w-6 h-6" />, description: "Gizlilik" },
    { name: "İmparatorluk", icon: <Crown className="w-6 h-6" />, description: "Hakimiyet" }
  ];

  return (
    <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-6 border border-gray-600 hover:border-orange-500/50 transition-all duration-300">
      <h3 className="text-white font-bold mb-4 flex items-center">
        <Zap className="w-5 h-5 mr-2 text-orange-500" />
        Hangi Yolu Seçeceksin?
      </h3>
      
      <div className="grid grid-cols-2 gap-4 mb-6">
        {paths.map((path, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-gray-700/80 to-gray-800/80 hover:from-orange-600/20 hover:to-red-600/20 p-4 rounded-lg cursor-pointer transition-all duration-300 group border border-gray-600 hover:border-orange-500/50"
          >
            <div className="flex items-center space-x-3">
              <div className="text-orange-500 group-hover:text-orange-400 transition-colors">
                {path.icon}
              </div>
              <div>
                <div className="text-white font-medium">{path.name}</div>
                <div className="text-gray-400 text-sm">{path.description}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Character Image */}
      <div className="flex justify-center mb-6">
        <div className="relative">
          <div className="w-32 h-32 bg-gray-700 rounded-full border-4 border-orange-500 overflow-hidden shadow-xl">
            <img
              src="https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
              alt="Character"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-600 to-red-600 px-3 py-1 rounded-full shadow-lg">
            <div className="text-white font-bold text-sm">SAVAŞÇI</div>
          </div>
        </div>
      </div>
      
      <p className="text-gray-300 text-sm text-center leading-relaxed">
        Bu silahları, hassasiyeti ve diğer silahları satın al. Bu sınıf çekiçler, 
        bıçaklar, baltalara karşı hassastır. Özel silahlar bu teknoloji ve uçan zırh ile.
      </p>
    </div>
  );
};

// Text Based Games Component
const TextBasedGames: React.FC = () => {
  return (
    <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-6 border border-gray-600 hover:border-orange-500/50 transition-all duration-300">
      <h3 className="text-white font-bold mb-4 flex items-center">
        <Newspaper className="w-5 h-5 mr-2 text-orange-500" />
        Metin Tabanlı Oyunlar
      </h3>
      
      <p className="text-gray-300 text-sm mb-4 leading-relaxed">
        Cinayet heyecan verici, gerçek rol tabanlı oyundur. Metin tabanlı oyunlar 
        bağımlılık yaratır ve oynaması eğlencelidir. Cinayet bu konudadır!
      </p>
      
      <p className="text-gray-300 text-sm mb-4 leading-relaxed">
        Yeni oyuncular hafta ve fakir itememlerinizi başlatın. Cinayet şehrinin karmaşık 
        underworld'ünde hiçbir şey olmayacak. RPG oyunu olarak, kararlar alacaksın.
      </p>
      
      <p className="text-gray-300 text-sm mb-4 leading-relaxed">
        Para kazanmak ve statünü artırmak için ellerini kirletmen gerekecek. 
        Suç işle ve diğer oyuncularla savaş. Ne kadar güçlü olursan o kadar kolay kazanırsın.
      </p>
      
      <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 p-4 rounded-lg border border-orange-500/30">
        <h4 className="text-orange-400 font-bold mb-2">💎 Premium Özellikler</h4>
        <ul className="text-gray-300 text-sm space-y-1">
          <li>• Özel silah koleksiyonu</li>
          <li>• VIP çete avantajları</li>
          <li>• Hızlı deneyim kazanımı</li>
          <li>• Özel karakter kostümleri</li>
        </ul>
      </div>
    </div>
  );
};

// Latest News Component
const LatestNews: React.FC = () => {
  const news = [
    { id: "#405", date: "14/10/2025", title: "Patch not - Yeni silahlar eklendi" },
    { date: "13/10/2025", title: "Çete deposu güncellemesi" },
    { id: "#404", date: "07/10/2025", title: "Patch not - Hata düzeltmeleri" },
    { id: "#403", date: "30/09/2025", title: "Crimes 2.0 - Kundakçılık sistemi" },
    { id: "#402", date: "23/09/2025", title: "Patch not - Performans iyileştirmeleri" },
    { id: "#401", date: "16/09/2025", title: "Patch not - Yeni özellikler" },
    { id: "#400", date: "09/09/2025", title: "Patch not - Güvenlik güncellemesi" }
  ];

  return (
    <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-6 border border-gray-600 hover:border-orange-500/50 transition-all duration-300">
      <h3 className="text-white font-bold mb-4 flex items-center">
        <Newspaper className="w-5 h-5 mr-2 text-orange-500" />
        Son Haberler
      </h3>
      
      <div className="space-y-3">
        {news.map((item, index) => (
          <div key={index} className="flex items-center space-x-3 text-sm hover:bg-gray-700/30 p-2 rounded transition-colors">
            <div className="text-orange-500">📰</div>
            <div className="text-gray-400 text-xs">{item.date}</div>
            <div className="text-white hover:text-orange-400 cursor-pointer flex-1">
              {item.id && <span className="text-orange-500">{item.id} </span>}{item.title}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 text-center">
        <button className="text-gray-400 hover:text-orange-400 text-sm transition-colors border border-gray-600 hover:border-orange-500 px-4 py-2 rounded">
          Tüm Haberleri Görüntüle
        </button>
      </div>
    </div>
  );
};

// Footer Component
const FooterBar: React.FC = () => {
  return (
    <footer className="bg-gray-900/95 backdrop-blur-sm border-t border-gray-700 py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-3xl font-bold text-white tracking-wider font-mono mb-4">
              CİNAYET
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Türkiye'nin en büyük ve en heyecan verici browser tabanlı suç oyunu.80.000'den fazla aktif oyuncuyla birlikte suç dünyasının karanlık sokaklarında 
              imparatorluğunu kur.
            </p>
            <div className="flex items-center space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-blue-500 cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-pink-500 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Hızlı Bağlantılar</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Kayıt Ol</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Nasıl Oynanır</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Forum</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Wiki</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Haberler</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-bold mb-4">Destek</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">İletişim</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Kurallar</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Gizlilik Politikası</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Çerez Politikası</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Krediler</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 text-center">
          <div className="text-gray-400 text-sm">
            © 2014-2025 CİNAYET LTD. Tüm hakları saklıdır. | Made with ❤️ for Turkish gamers
          </div>
        </div>
      </div>
    </footer>
  );
};

function App() {
  const [showRegistration, setShowRegistration] = useState(false);
  const [showForum, setShowForum] = useState(false);

  const handleRegisterClick = () => {
    setShowRegistration(true);
    setShowForum(false);
  };

  const handleForumClick = () => {
    setShowForum(true);
    setShowRegistration(false);
  };

  const handleBackToHome = () => {
    setShowRegistration(false);
    setShowForum(false);
  };

  if (showRegistration) {
    return <RegistrationPage onBack={handleBackToHome} />;
  }

  if (showForum) {
    return <ForumPage onBack={handleBackToHome} />;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header onRegisterClick={handleRegisterClick} onForumClick={handleForumClick} />
      
      {/* Hero Section */}
      <HeroSection onRegisterClick={handleRegisterClick} />
      
      {/* Main Content */}
      <div className="relative min-h-screen">
        <CityBackground />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="space-y-8">
              <JoinSection onRegisterClick={handleRegisterClick} />
              <UserStats />
              <GameClasses />
            </div>
            
            {/* Middle Column */}
            <div className="space-y-8">
              <TopFeatures />
              <GlobalRank />
              <ClanRankings />
            </div>
            
            {/* Right Column */}
            <div className="space-y-8">
              <PathSelection />
              <TextBasedGames />
              <LatestNews />
            </div>
          </div>
        </div>
      </div>
      
      <FooterBar />
    </div>
  );
}

export default App;
