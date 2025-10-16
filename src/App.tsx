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
  Swords
} from 'lucide-react';

// Header Navigation Component
const Header: React.FC = () => {
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
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Kayıt Ol</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Forum</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Haberler</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Wiki</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Kurallar</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">İletişim</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Krediler</a>
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-300 hover:text-white transition-colors text-sm">
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
const HeroSection: React.FC = () => {
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
                left: `${Math.random() * 100}%`,
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
                <button className="group relative bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-12 py-4 rounded-xl text-xl font-bold transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-red-500/50">
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
                <Trophy className="w-4h-4 mr-2" />
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
const JoinSection: React.FC = () => {
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
      
      <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 rounded font-medium transition-colors">
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
              {gameClasses[selectedClass].abilities.map((ability, i) => (
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

// Top Features Component
const TopFeatures: React.FC = () => {
  const features = [
    { icon: <User className="w-5 h-5" />, tooltip: "Profil" },
    { icon: <Users className="w-5 h-5" />, tooltip: "Çeteler" },
    { icon: <Shield className="w-5 h-5" />, tooltip: "Savunma" },
    { icon: <Sword className="w-5 h-5" />, tooltip: "Saldırı" },
    { icon:<Target className="w-5 h-5" />, tooltip: "Hedef" },
    { icon: <Star className="w-5 h-5" />, tooltip:"Değerlendirme" },
    { icon: <Crosshair className="w-5 h-5" />, tooltip: "Silahlar" },
    { icon: <Car className="w-5 h-5" />, tooltip: "Araçlar" },
    { icon: <Briefcase className="w-5 h-5" />, tooltip: "İş" },
    { icon: <Home className="w-5 h-5" />, tooltip: "Ev" },
    { icon: <ShoppingBag className="w-5 h-5" />, tooltip: "Market" },
    { icon: <Plane className="w-5 h-5" />, tooltip: "Seyahat" },
    {icon: <Building className="w-5 h-5" />, tooltip: "Şirket" },
    { icon: <Crown className="w-5 h-5" />, tooltip: "Liderlik" },
    { icon: <Gamepad2 className="w-5 h-5" />, tooltip: "Oyunlar" },
    { icon: <Calendar className="w-5 h-5" />, tooltip: "Etkinlikler" }
  ];

  return (
    <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-6 border border-gray-600 hover:border-orange-500/50 transition-all duration-300">
      <h3 className="text-white font-bold mb-4 flex items-center">
        <Gamepad2 className="w-5 h-5 mr-2 text-orange-500" />
        Temel Özellikler
      </h3>
      
      <div className="grid grid-cols-8 gap-3">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gray-700 hover:bg-gradient-to-br hover:from-orange-600/20 hover:to-red-600/20 p-2 rounded cursor-pointer transition-all duration-300 group relative border border-transparent hover:border-orange-500/30"
            title={feature.tooltip}
          >
            <div className="text-gray-300 group-hover:text-orange-400 transition-colors">
              {feature.icon}
            </div>
          </div>
        ))}
      </div>

      {/* Featured Section */}
      <div className="mt-6 flex items-center space-x-4 bg-gradient-to-r from-gray-700/50 to-gray-800/50 p-4 rounded-lg border border-gray-600">
        <div className="bg-gradient-to-br from-orange-500 to-red-500 p-3 rounded-lg shadow-lg">
          <Plane className="w-8 h-8 text-white" />
        </div>
        <div className="flex-1">
          <h4 className="text-white font-bold mb-1">Seyahat Sistemi</h4>
          <p className="text-gray-300 text-sm">
            11 şehir ve ilginç yerler keşfet. Dünyanın dört bir yanından hizmet, alışveriş ve dünya kültürünü deneyimle.
          </p>
        </div>
      </div>
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

// Enhanced Reviews Component
const Reviews: React.FC = () => {
  const reviews = [
    {
      rating: 5,
      likes: 44,
      text: "Bu arayüz mobil kullanım için mükemmel optimize edilmiş. Kesinlikle bu deneyimi kaçırmamanızı öneririm!",
      author: "KatilKral",
      date: "18 Eylül 2025"
    },
    {
      rating: 5,
      likes: 37,
      text: "Grafikleri ve oyunun akışkanlığı gerçekten etkileyici. TORN'dan çok daha iyi!",
      author: "MafiaBoss",
      date: "15Eylül 2025"
    },
    {
      rating: 4,
      likes: 29,
      text: "Türkçe dil desteği mükemmel. Sonunda kendi dilimizde oyun oynayabiliyoruz!",
      author: "SilahDealer",
      date: "12 Eylül 2025"
    }
  ];

  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-6 border border-gray-600 hover:border-orange-500/50 transition-all duration-300">
      <h3 className="text-white font-bold mb-4 flex items-center">
        <Star className="w-5 h-5 mr-2 text-orange-500" />
        Oyuncu Değerlendirmeleri
      </h3>
      
      {/* Current Review */}
      <div className="mb-6 bg-gray-700/50 p-4 rounded-lg border border-gray-600 min-h-[120px]">
        <div className="flex items-center space-x-2 mb-2">
          <div className="flex text-orange-500">
            {[...Array(reviews[currentReview].rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>
          <span className="text-gray-400 text-sm flex items-center">
            <Heart className="w-4 h-4 mr-1" />
            {reviews[currentReview].likes} beğeni
          </span>
        </div>
        <p className="text-gray-300 text-sm mb-3 leading-relaxed">
          "{reviews[currentReview].text}"
        </p>
        <div className="text-xs text-gray-500">
          - {reviews[currentReview].author} • {reviews[currentReview].date}
        </div>
      </div>

      {/* Review Navigation Dots */}
      <div className="flex justify-center space-x-2 mb-4">
        {reviews.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentReview(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              currentReview === index ? 'bg-orange-500' : 'bg-gray-600'
            }`}
          />
        ))}
      </div>

      {/* Overall Rating */}
      <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 p-4 rounded-lg border border-orange-500/30">
        <div className="flex items-center justify-between mb-2">
          <span className="text-orange-400 font-bold text-lg">4.8/5</span>
          <div className="flex text-orange-500">
            <Star className="w-5 h-5 fill-current" />
            <Star className="w-5 h-5 fill-current" />
            <Star className="w-5 h-5 fill-current" />
            <Star className="w-5 h-5 fill-current" />
            <Star className="w-5 h-5 fill-current" />
          </div>
        </div>
        <div className="text-sm text-gray-300">2,847 oyuncu değerlendirmesi</div>
      </div>

      {/* Quick Stats */}
      <div className="mt-4 grid grid-cols-3 gap-3 text-center">
        <div className="bg-gray-700/30 rounded p-2">
          <div className="text-green-400 font-bold text-lg">89%</div>
          <div className="text-xs text-gray-400">Olumlu</div>
        </div>
        <div className="bg-gray-700/30 rounded p-2">
          <div className="text-blue-400 font-bold text-lg">4.2K</div>
          <div className="text-xs text-gray-400">Yorum</div>
        </div>
        <div className="bg-gray-700/30 rounded p-2">
          <div className="text-purple-400 font-bold text-lg">95%</div>
          <div className="text-xs text-gray-400">Tavsiye</div>
        </div>
      </div>
    </div>
  );
};

// Path Selection Component
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
        Cinayet heyecan verici, gerçek rol tabanlıoyundur. Metin tabanlı oyunlar 
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
              Türkiye'nin en büyük ve en heyecan verici browser tabanlı suç oyunu. 
              80.000'den fazla aktif oyuncuyla birlikte suç dünyasının karanlık sokaklarında 
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
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Main Content */}
      <div className="relative min-h-screen">
        <CityBackground />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="space-y-8">
              <JoinSection />
              <UserStats />
              <GameClasses />
            </div>
            
            {/* Middle Column */}
            <div className="space-y-8">
              <TopFeatures />
              <GlobalRank />
              <ClanRankings />
              <Reviews />
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
