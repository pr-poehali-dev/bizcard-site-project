import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <section className="relative overflow-hidden min-h-screen flex items-center justify-center px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent opacity-20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)]" />
        
        <div className="relative z-10 max-w-5xl mx-auto text-center animate-fade-in-up">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Привет, я Креатор
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto">
            Создаю цифровые продукты, которые вдохновляют и меняют мир к лучшему
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
              Мои работы
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
            <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
              Связаться
              <Icon name="Mail" className="ml-2" size={20} />
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-primary" />
        </div>
      </section>

      <section id="about" className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden border border-primary/20">
                <img 
                  src="https://cdn.poehali.dev/projects/d4bae922-5aae-4f28-834f-c29b18732752/files/76003eb8-703c-41da-869c-25d07bd64e3a.jpg" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="animate-fade-in-up space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Обо мне
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Я — веб-дизайнер и разработчик с 5+ летним опытом создания современных цифровых продуктов. 
                Специализируюсь на UI/UX дизайне, frontend-разработке и создании брендовой идентичности.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Моя миссия — создавать интуитивные интерфейсы, которые решают реальные проблемы пользователей 
                и приносят ценность бизнесу.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                {[
                  { icon: 'Code', label: 'Разработка' },
                  { icon: 'Palette', label: 'Дизайн' },
                  { icon: 'Rocket', label: 'Инновации' },
                  { icon: 'Users', label: 'UX/UI' }
                ].map((item, idx) => (
                  <Card key={idx} className="p-4 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all hover:scale-105">
                    <Icon name={item.icon as any} size={24} className="text-primary mb-2" />
                    <p className="font-semibold">{item.label}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-24 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Портфолио
            </h2>
            <p className="text-lg text-foreground/70">Избранные проекты за последний год</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'E-commerce платформа', category: 'Web Design', color: 'from-primary to-secondary', image: 'https://cdn.poehali.dev/projects/d4bae922-5aae-4f28-834f-c29b18732752/files/565b1e85-c87a-4283-9c94-008708006b2e.jpg' },
              { title: 'Мобильное приложение', category: 'UI/UX', color: 'from-secondary to-accent', image: 'https://cdn.poehali.dev/projects/d4bae922-5aae-4f28-834f-c29b18732752/files/ae487488-926b-405f-8c8c-0b250c1ebde0.jpg' },
              { title: 'Корпоративный сайт', category: 'Branding', color: 'from-accent to-primary', image: '/placeholder.svg' },
              { title: 'SaaS Dashboard', category: 'Web App', color: 'from-primary/80 to-secondary/80', image: '/placeholder.svg' },
              { title: 'Landing Page', category: 'Marketing', color: 'from-secondary/80 to-accent/80', image: '/placeholder.svg' },
              { title: 'CRM система', category: 'Enterprise', color: 'from-accent/80 to-primary/80', image: '/placeholder.svg' }
            ].map((project, idx) => (
              <Card 
                key={idx} 
                className="group overflow-hidden bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all animate-scale-in cursor-pointer"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className={`aspect-video bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity group-hover:scale-110 duration-500"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Icon name="Eye" size={32} className="text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-primary font-medium mb-1">{project.category}</p>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Отзывы
            </h2>
            <p className="text-lg text-foreground/70">Что говорят клиенты о сотрудничестве</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Алексей Петров',
                role: 'CEO, StartupX',
                text: 'Превосходный профессионал! Проект был выполнен точно в срок, а результат превзошел все ожидания.',
                avatar: '👨‍💼'
              },
              {
                name: 'Мария Смирнова',
                role: 'Маркетолог, BrandCo',
                text: 'Креативный подход и внимание к деталям — именно то, что нужно для создания успешного продукта.',
                avatar: '👩‍💻'
              },
              {
                name: 'Дмитрий Волков',
                role: 'Founder, TechLab',
                text: 'Работа над проектом была настоящим удовольствием. Рекомендую как надежного партнера!',
                avatar: '👨‍🚀'
              }
            ].map((testimonial, idx) => (
              <Card 
                key={idx} 
                className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all animate-fade-in-up hover:scale-105"
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-foreground/60">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-foreground/80 leading-relaxed">{testimonial.text}</p>
                <div className="flex gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-accent fill-accent" />
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-4 bg-muted/30">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Контакты
            </h2>
            <p className="text-lg text-foreground/70">Готов обсудить ваш проект</p>
          </div>

          <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 animate-scale-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Имя</label>
                <Input 
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-background/50 border-primary/20 focus:border-primary"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input 
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-background/50 border-primary/20 focus:border-primary"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Сообщение</label>
                <Textarea 
                  placeholder="Расскажите о вашем проекте..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-background/50 border-primary/20 focus:border-primary resize-none"
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
              >
                Отправить сообщение
                <Icon name="Send" className="ml-2" size={18} />
              </Button>
            </form>

            <div className="flex justify-center gap-4 mt-8 pt-8 border-t border-primary/20">
              {[
                { icon: 'Github', label: 'GitHub' },
                { icon: 'Linkedin', label: 'LinkedIn' },
                { icon: 'Mail', label: 'Email' },
                { icon: 'Twitter', label: 'Twitter' }
              ].map((social, idx) => (
                <Button 
                  key={idx}
                  variant="ghost" 
                  size="icon"
                  className="hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  <Icon name={social.icon as any} size={20} />
                </Button>
              ))}
            </div>
          </Card>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-primary/20">
        <div className="max-w-6xl mx-auto text-center text-foreground/60">
          <p>© 2024 Креатор. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;