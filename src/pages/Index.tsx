import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const plans = [
  {
    name: "Базовый",
    price: "199 ₽/мес",
    features: ["1 устройство", "100+ серверов", "Базовая поддержка", "Без логов"],
    popular: false
  },
  {
    name: "Стандарт",
    price: "349 ₽/мес", 
    features: ["5 устройств", "500+ серверов", "24/7 поддержка", "Без логов", "Kill Switch"],
    popular: true
  },
  {
    name: "Премиум",
    price: "599 ₽/мес",
    features: ["10 устройств", "1000+ серверов", "Приоритетная поддержка", "Без логов", "Kill Switch", "Выделенный IP"],
    popular: false
  }
];

const features = [
  {
    icon: "Shield",
    title: "Безопасные покупки",
    description: "Защищенные транзакции в интернет-магазинах мира"
  },
  {
    icon: "Globe",
    title: "Доступ к сайтам",
    description: "Обход блокировок и доступ к любимым сервисам"
  },
  {
    icon: "Zap",
    title: "Высокая скорость",
    description: "Быстрое соединение без замедления интернета"
  },
  {
    icon: "Eye",
    title: "Полная анонимность",
    description: "Ваша активность не отслеживается и не записывается"
  }
];

const countries = [
  { name: "США", count: 120, flag: "🇺🇸" },
  { name: "Германия", count: 85, flag: "🇩🇪" },
  { name: "Великобритания", count: 65, flag: "🇬🇧" },
  { name: "Япония", count: 45, flag: "🇯🇵" },
  { name: "Канада", count: 35, flag: "🇨🇦" },
  { name: "Нидерланды", count: 55, flag: "🇳🇱" }
];

export default function Index() {
  const [selectedPlan, setSelectedPlan] = useState("Стандарт");

  return (
    <div className="min-h-screen bg-darker text-white">
      {/* Header */}
      <header className="bg-dark/80 backdrop-blur-sm border-b border-gray-700 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                <Icon name="Shield" size={20} className="text-white" />
              </div>
              <h1 className="text-xl font-bold text-white">SecureVPN</h1>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                Войти
              </Button>
              <Button size="sm" className="bg-primary hover:bg-primary/90">
                Попробовать
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <Icon name="Shield" size={16} />
            <span className="text-sm font-medium">Защищенный интернет для всех</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Безопасные покупки и 
            <span className="block text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">
              доступ к любым сайтам
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Покупайте в зарубежных магазинах, получайте доступ к заблокированным сервисам 
            и защищайте свои данные с помощью надежного VPN
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8">
              <Icon name="Download" size={20} className="mr-2" />
              Скачать приложение
            </Button>
            <Button variant="outline" size="lg" className="border-gray-600 text-white hover:bg-white/10">
              <Icon name="Play" size={20} className="mr-2" />
              Смотреть демо
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-primary mb-1">1000+</div>
              <div className="text-sm text-gray-400">Серверов</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-secondary mb-1">65</div>
              <div className="text-sm text-gray-400">Стран</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-1">99.9%</div>
              <div className="text-sm text-gray-400">Доступность</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-secondary mb-1">24/7</div>
              <div className="text-sm text-gray-400">Поддержка</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-dark/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Почему выбирают нас</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Современные технологии защиты и глобальная сеть серверов для вашего комфорта
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="bg-dark border-gray-700 hover:border-primary/50 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon name={feature.icon as any} size={24} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Countries */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Серверы по всему миру</h2>
            <p className="text-gray-400">Выбирайте из сотен серверов в 65+ странах</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {countries.map((country, index) => (
              <Card key={index} className="bg-dark border-gray-700 hover:border-primary/50 transition-colors cursor-pointer">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl mb-2">{country.flag}</div>
                  <div className="font-medium text-white text-sm mb-1">{country.name}</div>
                  <div className="text-xs text-gray-400">{country.count} серверов</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-dark/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Выберите ваш план</h2>
            <p className="text-gray-400">Гибкие тарифы для любых потребностей</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative bg-dark border-gray-700 hover:border-primary/50 transition-all duration-200 ${
                  plan.popular ? 'border-primary ring-1 ring-primary/20' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-white">Популярный</Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl text-white">{plan.name}</CardTitle>
                  <div className="text-3xl font-bold text-primary mt-2">{plan.price}</div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-secondary" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-primary hover:bg-primary/90 text-white' 
                        : 'bg-gray-700 hover:bg-gray-600 text-white'
                    }`}
                    onClick={() => setSelectedPlan(plan.name)}
                  >
                    Выбрать план
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Безопасные покупки в любой точке мира
              </h2>
              <p className="text-gray-400 mb-6">
                Покупайте в зарубежных интернет-магазинах без ограничений. 
                Наш VPN обеспечивает надежное шифрование ваших финансовых данных 
                и защищает от мошенников.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="CreditCard" size={20} className="text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Защита платежей</h4>
                    <p className="text-sm text-gray-400">Шифрование банковских данных военного уровня</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Icon name="ShoppingCart" size={20} className="text-secondary mt-1" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Доступ к магазинам</h4>
                    <p className="text-sm text-gray-400">Покупки в Amazon, eBay, AliExpress и других</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" size={20} className="text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Любая локация</h4>
                    <p className="text-sm text-gray-400">Меняйте виртуальное местоположение одним кликом</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl p-8">
                <div className="bg-dark rounded-xl p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Статус подключения</span>
                    <Badge className="bg-secondary text-white">Защищено</Badge>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-300">IP адрес:</span>
                      <span className="text-white">185.246.xxx.xxx</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Локация:</span>
                      <span className="text-white">🇺🇸 Нью-Йорк</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Скорость:</span>
                      <span className="text-secondary">95 Мбит/с</span>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-600">
                    <div className="text-xs text-gray-400 text-center">
                      🔒 Соединение зашифровано AES-256
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">
            Начните пользоваться безопасным интернетом уже сегодня
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            30-дневная гарантия возврата денег. Попробуйте без риска.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100 px-8">
              <Icon name="Download" size={20} className="mr-2" />
              Скачать сейчас
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Узнать больше
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-darker py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-gradient-to-r from-primary to-secondary rounded">
                  <Icon name="Shield" size={16} className="text-white m-1" />
                </div>
                <span className="font-bold text-white">SecureVPN</span>
              </div>
              <p className="text-gray-400 text-sm">
                Ваша безопасность и приватность - наш приоритет.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-3">Продукт</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Приложения</li>
                <li>Серверы</li>
                <li>Безопасность</li>
                <li>Скорость</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-3">Поддержка</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Помощь</li>
                <li>Контакты</li>
                <li>FAQ</li>
                <li>Статус серверов</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-3">Компания</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>О нас</li>
                <li>Блог</li>
                <li>Карьера</li>
                <li>Пресс-центр</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            © 2024 SecureVPN. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}