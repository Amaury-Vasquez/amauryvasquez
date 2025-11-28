import { Calendar } from "lucide-react";
import GradientText from "@/components/GradientText";
import { timeline } from "../../data/timeline";

export default function TimelineSection() {
  const currentDate = new Date();
  const yearsOfExperience = currentDate.getFullYear() - 2022;

  return (
    <section id="timeline" className="py-20 bg-base-200/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <GradientText as="h2" size="4xl" className="mb-4">
            My Development Journey
          </GradientText>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            {yearsOfExperience} years of growth in tech industry, from debugging
            to architecting full-stack solutions
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {timeline.map((event, index) => (
            <div
              key={index}
              className="relative flex items-start mb-12 last:mb-0"
            >
              {/* Timeline Line */}
              {index !== timeline.length - 1 ? (
                <span className="absolute left-6 top-12 w-0.5 h-20 bg-gradient-to-b from-primary to-primary/30"></span>
              ) : null}

              {/* Timeline Icon */}
              <span
                className={`flex-shrink-0 w-12 h-12 ${event.color} bg-current/10 rounded-full flex items-center justify-center mr-6 relative z-10`}
              >
                {event.icon}
              </span>

              {/* Timeline Content */}
              <div className="flex-1 bg-base-100 rounded-lg p-6 shadow-lg border border-base-300">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-primary">
                    {event.date}
                  </span>
                  <Calendar className="size-4 text-base-content/40" />
                </div>
                <h3 className="text-xl font-bold mb-1">{event.title}</h3>
                <p className="text-base-content/80 font-medium mb-2">
                  {event.role}
                </p>
                <p className="text-base-content/70">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
