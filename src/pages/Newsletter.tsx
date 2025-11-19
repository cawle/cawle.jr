import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import mlLessonImage from "@/assets/ml-lesson.jpg";

const Newsletter = () => {
  const posts = [
    {
      id: 1,
      title: "Machine Learning Lesson",
      date: "2024",
      image: mlLessonImage,
      excerpt: "Lately I've been learning about Machine Learning, and it's not just about teaching computers...",
      content: `Lately I've been learning about Machine Learning, and it's not just about teaching computers — it actually reminded me a lot about life. In ML, you clean the data first: remove errors, fix missing parts, and prepare it well — just like how we need to heal, let go of negativity, and get our mindset right before we can grow. Then comes training the model using good features — which is like building skills, values, and habits in real life. The model is tested on unseen data to see if it can handle real challenges — just like we're tested by real-life situations. If we overfit, we try too hard to be perfect or please everyone. If we underfit, we don't live up to our potential. Success, both in ML and life, is about learning continuously, adapting, and improving. Whether it's a model or a person — real growth comes from training, testing, adjusting, and never stopping.`,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-6 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">Newsletter</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Thoughts, lessons, and reflections on tech and life
          </p>

          <div className="grid gap-8">
            {posts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3">
                      <CardHeader>
                        <CardTitle className="text-3xl">{post.title}</CardTitle>
                        <CardDescription className="text-base">{post.date}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-foreground leading-relaxed text-lg">
                          {post.content}
                        </p>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default Newsletter;
