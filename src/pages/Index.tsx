import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  rating: number;
  price: string;
  image: string;
  tags: string[];
}

const mockProducts: Product[] = [
  {
    id: 1,
    title: "Smart Fitness Tracker",
    description: "Отслеживает активность, сон и здоровье с точностью до мелочей",
    category: "Здоровье",
    rating: 4.8,
    price: "4 990 ₽",
    image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=300&h=200&fit=crop",
    tags: ["Популярное", "Новинка"]
  },
  {
    id: 2,
    title: "Беспроводные наушники",
    description: "Премиальное качество звука с активным шумоподавлением",
    category: "Аудио",
    rating: 4.9,
    price: "8 990 ₽",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=200&fit=crop",
    tags: ["Топ выбор", "Премиум"]
  },
  {
    id: 3,
    title: "Умная колонка",
    description: "Голосовой помощник для умного дома с отличным звуком",
    category: "Умный дом",
    rating: 4.7,
    price: "6 490 ₽",
    image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=300&h=200&fit=crop",
    tags: ["Рекомендуем"]
  }
];

const categories = ["Все", "Здоровье", "Аудио", "Умный дом", "Техника"];

export default function Index() {
  const [selectedCategory, setSelectedCategory] = useState("Все");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = mockProducts.filter(product => {
    const matchesCategory = selectedCategory === "Все" || product.category === selectedCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-mint/20 via-white to-turquoise/10">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-coral to-turquoise rounded-lg flex items-center justify-center">
                <Icon name="Sparkles" size={20} className="text-white" />
              </div>
              <h1 className="text-xl font-bold text-navy">RecommendMe</h1>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm">
                <Icon name="User" size={16} className="mr-2" />
                Профиль
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6 leading-tight">
            Персональные рекомендации
            <span className="block text-coral">для вас</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Найдите идеальные продукты на основе ваших предпочтений и интересов. 
            Наш ИИ анализирует тысячи товаров, чтобы предложить именно то, что вам нужно.
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto mb-8">
            <Icon name="Search" size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Поиск товаров..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 py-3 text-center rounded-full border-2 focus:border-coral"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 mb-8">
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? "default" : "outline"}
              className={`rounded-full px-6 transition-all duration-200 ${
                selectedCategory === category
                  ? "bg-coral hover:bg-coral/90 text-white"
                  : "hover:bg-coral/10 hover:border-coral"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>
      </section>

      {/* Recommendations Grid */}
      <section className="container mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <Card 
              key={product.id} 
              className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-0 shadow-md bg-white/70 backdrop-blur-sm overflow-hidden"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-3 right-3 flex flex-col gap-1">
                  {product.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      className={`text-xs ${
                        tag === "Популярное" ? "bg-coral text-white" :
                        tag === "Топ выбор" ? "bg-turquoise text-white" :
                        tag === "Новинка" ? "bg-mint text-navy" :
                        "bg-navy text-white"
                      }`}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <CardTitle className="text-lg text-navy group-hover:text-coral transition-colors">
                    {product.title}
                  </CardTitle>
                  <div className="flex items-center gap-1 text-sm">
                    <Icon name="Star" size={14} className="text-yellow-500 fill-current" />
                    <span className="font-medium">{product.rating}</span>
                  </div>
                </div>
                <Badge variant="outline" className="w-fit text-xs">
                  {product.category}
                </Badge>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-navy">
                    {product.price}
                  </span>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="hover:bg-coral/10">
                      <Icon name="Heart" size={16} />
                    </Button>
                    <Button size="sm" className="bg-coral hover:bg-coral/90 text-white">
                      <Icon name="ShoppingCart" size={16} className="mr-1" />
                      Купить
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <Icon name="Search" size={48} className="mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold text-navy mb-2">Ничего не найдено</h3>
            <p className="text-gray-600">Попробуйте изменить поисковый запрос или фильтры</p>
          </div>
        )}
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-coral to-turquoise py-12 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
            <div>
              <div className="text-3xl font-bold mb-2">10,000+</div>
              <div className="text-white/90">Товаров проанализировано</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">98%</div>
              <div className="text-white/90">Точность рекомендаций</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">5,000+</div>
              <div className="text-white/90">Довольных пользователей</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-6 h-6 bg-gradient-to-r from-coral to-turquoise rounded">
              <Icon name="Sparkles" size={16} className="text-white m-1" />
            </div>
            <span className="font-bold">RecommendMe</span>
          </div>
          <p className="text-gray-400">
            © 2024 RecommendMe. Персональные рекомендации для каждого.
          </p>
        </div>
      </footer>
    </div>
  );
}