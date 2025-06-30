
import { useState } from "react";
import { Phone, MapPin, Mail, Star, Leaf, CheckCircle, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setFormData({ name: "", phone: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-green-600" />
              <span className="text-xl font-bold text-gray-800">SLNT</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-600 hover:text-green-600 transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-green-600 transition-colors">About</button>
              <button onClick={() => scrollToSection('products')} className="text-gray-600 hover:text-green-600 transition-colors">Products</button>
              <button onClick={() => scrollToSection('testimonials')} className="text-gray-600 hover:text-green-600 transition-colors">Reviews</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-green-600 transition-colors">Contact</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <Leaf className="h-16 w-16 text-green-600 mx-auto mb-4" />
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
              Sri Laxmi Narasimha Traders
            </h1>
            <p className="text-xl text-gray-600 mb-8">Quality Paddy Seeds for Prosperous Farming</p>
            <div className="flex items-center justify-center text-gray-600 mb-8">
              <MapPin className="h-5 w-5 mr-2" />
              <span>Karatagi, Karnataka - 583229</span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Award className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Premium Quality</h3>
              <p className="text-gray-600">Hand-selected, high-germination paddy seeds</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Trusted by Farmers</h3>
              <p className="text-gray-600">Serving the farming community for years</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Expert Support</h3>
              <p className="text-gray-600">Guidance from seed selection to harvest</p>
            </div>
          </div>
          <Button 
            onClick={() => scrollToSection('contact')} 
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg"
          >
            Contact Us Today
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">About Sri Laxmi Narasimha Traders</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Established with a mission to support local farmers, SLNT has been a trusted name in providing 
              high-quality paddy seeds in Karatagi and surrounding regions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Our Story</h3>
              <p className="text-gray-600 mb-4">
                Sri Laxmi Narasimha Traders was founded with a deep understanding of farming challenges and 
                a commitment to providing solutions that truly work. We believe that quality seeds are the 
                foundation of successful farming.
              </p>
              <p className="text-gray-600 mb-4">
                Located in the heart of Karatagi, we have built strong relationships with farmers across 
                Karnataka, understanding their unique needs and providing personalized recommendations.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span>Carefully sourced from trusted suppliers</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span>Rigorous quality testing and certification</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span>Expert advice on seed selection and farming practices</span>
                </div>
              </div>
            </div>
            <div className="bg-green-50 p-8 rounded-lg">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Our Commitment</h4>
              <ul className="space-y-3 text-gray-600">
                <li>• Providing only certified, high-germination seeds</li>
                <li>• Supporting farmers with technical knowledge</li>
                <li>• Fair pricing and transparent business practices</li>
                <li>• Building long-term relationships with our customers</li>
                <li>• Contributing to sustainable agricultural practices</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Paddy Seed Varieties</h2>
            <p className="text-lg text-gray-600">
              Choose from our carefully curated selection of high-yielding paddy seed varieties
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-green-700">BPT 5204 (Samba Mahsuri)</CardTitle>
                <CardDescription>Premium Long Grain Variety</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Duration: 145-150 days</li>
                  <li>• High yield potential: 6-7 tons/hectare</li>
                  <li>• Excellent grain quality</li>
                  <li>• Resistant to major pests</li>
                  <li>• Suitable for Kharif season</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-green-700">IR 64</CardTitle>
                <CardDescription>High Yielding Variety</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Duration: 130-135 days</li>
                  <li>• Yield: 5.5-6.5 tons/hectare</li>
                  <li>• Medium grain, good cooking quality</li>
                  <li>• Drought tolerant</li>
                  <li>• Wide adaptability</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-green-700">MTU 1010</CardTitle>
                <CardDescription>Popular Medium Duration</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Duration: 120-125 days</li>
                  <li>• Yield: 5-6 tons/hectare</li>
                  <li>• Fine grain quality</li>
                  <li>• Good market acceptance</li>
                  <li>• Suitable for irrigated conditions</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-green-700">JGL 1798</CardTitle>
                <CardDescription>Short Duration Variety</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Duration: 110-115 days</li>
                  <li>• Yield: 4.5-5.5 tons/hectare</li>
                  <li>• Early maturing</li>
                  <li>• Water efficient</li>
                  <li>• Ideal for double cropping</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-green-700">RNR 15048</CardTitle>
                <CardDescription>High Quality Grain</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Duration: 140-145 days</li>
                  <li>• Yield: 6-7 tons/hectare</li>
                  <li>• Premium grain quality</li>
                  <li>• Disease resistant</li>
                  <li>• Export quality rice</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-green-700">WGL 44</CardTitle>
                <CardDescription>Aromatic Variety</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Duration: 135-140 days</li>
                  <li>• Yield: 5-6 tons/hectare</li>
                  <li>• Aromatic grain</li>
                  <li>• Premium market value</li>
                  <li>• Good cooking quality</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Need help choosing the right variety for your farm?</p>
            <Button onClick={() => scrollToSection('contact')} className="bg-green-600 hover:bg-green-700">
              Get Expert Advice
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Farmers Say</h2>
            <p className="text-lg text-gray-600">
              Real feedback from farmers who trust SLNT for their seed needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-green-50">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "SLNT provided excellent BPT 5204 seeds last season. Got amazing yield and the grain 
                  quality was outstanding. The team's advice was very helpful."
                </p>
                <div className="text-sm">
                  <p className="font-semibold">Ravi Kumar</p>
                  <p className="text-gray-500">Farmer, Koppal District</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-green-50">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Been buying seeds from SLNT for 3 years now. Always genuine products and fair prices. 
                  Their MTU 1010 variety never disappoints."
                </p>
                <div className="text-sm">
                  <p className="font-semibold">Manjunath Patil</p>
                  <p className="text-gray-500">Farmer, Ballari District</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-green-50">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Great service and quality seeds. The owner personally guided me on variety selection 
                  based on my soil type. Highly recommended!"
                </p>
                <div className="text-sm">
                  <p className="font-semibold">Suresh Reddy</p>
                  <p className="text-gray-500">Farmer, Raichur District</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-green-50">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "SLNT seeds helped me achieve 20% higher yield compared to previous years. 
                  Quality is consistent and germination rate is excellent."
                </p>
                <div className="text-sm">
                  <p className="font-semibold">Basavaraj Hugar</p>
                  <p className="text-gray-500">Farmer, Gadag District</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-green-50">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Very reliable supplier. Seeds are always fresh and properly stored. 
                  The technical support they provide is invaluable for new farmers like me."
                </p>
                <div className="text-sm">
                  <p className="font-semibold">Priya Devi</p>
                  <p className="text-gray-500">Farmer, Haveri District</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-green-50">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Honest business practices and genuine care for farmers. SLNT is my go-to place 
                  for all seed requirements. Keep up the good work!"
                </p>
                <div className="text-sm">
                  <p className="font-semibold">Nagesh Biradar</p>
                  <p className="text-gray-500">Farmer, Dharwad District</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Get In Touch</h2>
            <p className="text-lg text-gray-600">
              Contact us for seed inquiries, expert advice, or to place an order
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-green-600 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Address</h4>
                    <p className="text-gray-600">
                      Sri Laxmi Narasimha Traders<br />
                      Karatagi, Karnataka<br />
                      PIN - 583229
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-green-600 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Phone</h4>
                    <p className="text-gray-600">+91 98765 43210</p>
                    <p className="text-gray-600">+91 87654 32109</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-green-600 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Email</h4>
                    <p className="text-gray-600">info@slntseeds.com</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
                <h4 className="font-semibold text-gray-800 mb-4">Business Hours</h4>
                <div className="space-y-2 text-gray-600">
                  <p>Monday - Saturday: 8:00 AM - 7:00 PM</p>
                  <p>Sunday: 9:00 AM - 5:00 PM</p>
                  <p className="text-sm text-green-600 font-medium">We're here to help during farming seasons!</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full"
                    placeholder="Tell us about your seed requirements, farm size, or any questions you have..."
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Leaf className="h-8 w-8 text-green-400" />
                <span className="text-xl font-bold">SLNT</span>
              </div>
              <p className="text-gray-300 mb-4">
                Sri Laxmi Narasimha Traders - Your trusted partner for quality paddy seeds 
                and farming success.
              </p>
              <p className="text-gray-400 text-sm">
                Serving farmers across Karnataka with dedication and integrity.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li><button onClick={() => scrollToSection('home')} className="hover:text-green-400 transition-colors">Home</button></li>
                <li><button onClick={() => scrollToSection('about')} className="hover:text-green-400 transition-colors">About Us</button></li>
                <li><button onClick={() => scrollToSection('products')} className="hover:text-green-400 transition-colors">Products</button></li>
                <li><button onClick={() => scrollToSection('testimonials')} className="hover:text-green-400 transition-colors">Testimonials</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-green-400 transition-colors">Contact</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-300">
                <p className="flex items-center"><MapPin className="h-4 w-4 mr-2" /> Karatagi, Karnataka - 583229</p>
                <p className="flex items-center"><Phone className="h-4 w-4 mr-2" /> +91 98765 43210</p>
                <p className="flex items-center"><Mail className="h-4 w-4 mr-2" /> info@slntseeds.com</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Sri Laxmi Narasimha Traders. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
