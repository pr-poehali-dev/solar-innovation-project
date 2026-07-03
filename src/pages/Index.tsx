import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code, Zap, Users, Github, Linkedin, Mail, ExternalLink, Star } from "lucide-react"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-slate-900">CodePulse</div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-slate-600 hover:text-slate-900 transition-colors">
                Обо мне
              </a>
              <a href="#services" className="text-slate-600 hover:text-slate-900 transition-colors">
                Тарифы
              </a>
              <a href="#projects" className="text-slate-600 hover:text-slate-900 transition-colors">
                Проекты
              </a>
              <a href="#contact" className="text-slate-600 hover:text-slate-900 transition-colors">
                Контакты
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">Бесплатный старт · Апгрейд в любой момент</Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Начните <span className="text-blue-600">бесплатно</span>, платите только за то, что нужно
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Разработка веб-приложений по freemium-модели: базовые задачи — бесплатно,
                а расширенные возможности и приоритетную поддержку подключаете тогда, когда проект вырастет.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Начать бесплатно
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg">
                  Смотреть тарифы
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Code className="h-6 w-6" />
                    <span className="font-semibold">Бесплатный тариф без карты</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Zap className="h-6 w-6" />
                    <span className="font-semibold">Апгрейд в один клик</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-6 w-6" />
                    <span className="font-semibold">Оплата только за нужное</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Обо мне</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Full-stack разработчик, который делает старт проекта доступным для каждого
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Freemium-подход к разработке</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Я убеждён, что попробовать должно быть просто и бесплатно. Базовые задачи —
                вёрстку, простые правки и консультацию — вы получаете без оплаты. А когда проект
                растёт, подключаете платные возможности: сложную логику, интеграции и приоритетную поддержку.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Frontend</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">Next.js</Badge>
                    <Badge variant="secondary">TypeScript</Badge>
                    <Badge variant="secondary">Tailwind</Badge>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Backend</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Node.js</Badge>
                    <Badge variant="secondary">Python</Badge>
                    <Badge variant="secondary">PostgreSQL</Badge>
                    <Badge variant="secondary">MongoDB</Badge>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/developer-workspace.png"
                alt="Рабочее место разработчика"
                className="rounded-2xl shadow-lg w-full max-w-[400px] h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Тарифы</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Начните бесплатно и переходите на платный тариф, когда проект будет готов расти
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Free</CardTitle>
                <div className="text-3xl font-bold text-slate-900 my-2">0 ₽</div>
                <CardDescription>
                  Идеальный старт, чтобы попробовать без вложений и рисков.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600 mb-6">
                  <li>* Лендинг или простой сайт</li>
                  <li>* Базовая вёрстка и правки</li>
                  <li>* Консультация 30 минут</li>
                  <li>* Поддержка в течение недели</li>
                </ul>
                <Button variant="outline" className="w-full">Начать бесплатно</Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-600 shadow-xl hover:shadow-2xl transition-shadow relative">
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white hover:bg-blue-600">Популярный</Badge>
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Pro</CardTitle>
                <div className="text-3xl font-bold text-slate-900 my-2">от 29 000 ₽</div>
                <CardDescription>Для растущих проектов, которым нужна серьёзная функциональность.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600 mb-6">
                  <li>* Full-stack веб-приложение</li>
                  <li>* Интеграции и API</li>
                  <li>* База данных и авторизация</li>
                  <li>* Приоритетная поддержка</li>
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Выбрать Pro</Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Enterprise</CardTitle>
                <div className="text-3xl font-bold text-slate-900 my-2">Индивидуально</div>
                <CardDescription>Комплексные решения под ключ для бизнеса и команд.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600 mb-6">
                  <li>* Сложная архитектура и highload</li>
                  <li>* Выделенная команда</li>
                  <li>* SLA и гарантии</li>
                  <li>* Персональный менеджер</li>
                </ul>
                <Button variant="outline" className="w-full">Обсудить проект</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Избранные проекты</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Проекты, которые начинались на бесплатном тарифе и выросли в полноценные продукты
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="relative h-48 bg-gradient-to-r from-blue-500 to-purple-600">
                <img
                  src="/modern-web-dashboard.png"
                  alt="SaaS дашборд"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>SaaS-платформа</CardTitle>
                    <CardDescription>
                      Комплексный дашборд для управления SaaS-приложениями с аналитикой в реальном времени.
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon">
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Next.js</Badge>
                  <Badge variant="outline">TypeScript</Badge>
                  <Badge variant="outline">Prisma</Badge>
                  <Badge variant="outline">Tailwind</Badge>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span>В топе Product Hunt</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="relative h-48 bg-gradient-to-r from-green-500 to-blue-600">
                <img
                  src="/ecommerce-mobile-app.png"
                  alt="Мобильное приложение"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>E-commerce приложение</CardTitle>
                    <CardDescription>
                      React Native приложение с удобным шопингом и интеграцией платежей.
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon">
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">React Native</Badge>
                  <Badge variant="outline">Node.js</Badge>
                  <Badge variant="outline">MongoDB</Badge>
                  <Badge variant="outline">Stripe</Badge>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span>10 000+ загрузок</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Начните бесплатно уже сегодня</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Оставьте заявку — стартуем на бесплатном тарифе и подключим платные возможности, когда понадобится.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Связаться со мной</h3>
              <p className="text-slate-300 mb-8 leading-relaxed">
                Не уверены, какой тариф подойдёт? Напишите — вместе начнём с бесплатного
                и определим, когда стоит переходить на Pro или Enterprise.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-slate-300">hello@example.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Github className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold">GitHub</p>
                    <p className="text-slate-300">@codepulse</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Linkedin className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold">LinkedIn</p>
                    <p className="text-slate-300">@codepulse-dev</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Начать проект</CardTitle>
                <CardDescription className="text-slate-300">
                  Расскажите о проекте, и обсудим, как я могу помочь.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Имя</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Иван"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Фамилия</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Иванов"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="ivan@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">О проекте</label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Расскажите о вашем проекте..."
                  />
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Отправить
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="font-bold text-xl text-white mb-4 md:mb-0">CodePulse</div>
            <p className="text-center md:text-right">
              2024 CodePulse. Помогаю разработчикам создавать быстрые и качественные веб-приложения.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}