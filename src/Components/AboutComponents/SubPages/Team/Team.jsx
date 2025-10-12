import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import HeroSection2 from "../../../HelperComponents/AboutSubComponent/HeroSection2";

const teamMembers = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO & Founder",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&fit=crop",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum officiis possimus beatae ipsam, alias sapiente corporis, similique vero asperiores voluptates ratione neque sit magnam velit quas suscipit? Fuga id harum inventore tempora magni, numquam error suscipit, adipisci enim ut molestias saepe? Enim amet cum repellendus saepe, laudantium quia laborum doloribus tempore reprehenderit laboriosam odio, porro illo architecto vero voluptatibus assumenda! Cum quod excepturi veniam recusandae rem nostrum quidem earum provident modi possimus in minima amet, error repellat ipsum beatae, accusantium et natus sit officiis sunt laudantium ex? Quidem omnis minima, beatae ab, delectus quae ipsum optio distinctio expedita excepturi aliquam?",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Head of Operations",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum officiis possimus beatae ipsam, alias sapiente corporis, similique vero asperiores voluptates ratione neque sit magnam velit quas suscipit? Fuga id harum inventore tempora magni, numquam error suscipit, adipisci enim ut molestias saepe? Enim amet cum repellendus saepe, laudantium quia laborum doloribus tempore reprehenderit laboriosam odio, porro illo architecto vero voluptatibus assumenda! Cum quod excepturi veniam recusandae rem nostrum quidem earum provident modi possimus in minima amet, error repellat ipsum beatae, accusantium et natus sit officiis sunt laudantium ex? Quidem omnis minima, beatae ab, delectus quae ipsum optio distinctio expedita excepturi aliquam?",
  },
  {
    id: 3,
    name: "Emma Williams",
    role: "Lead Travel Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=500&fit=crop",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum officiis possimus beatae ipsam, alias sapiente corporis, similique vero asperiores voluptates ratione neque sit magnam velit quas suscipit? Fuga id harum inventore tempora magni, numquam error suscipit, adipisci enim ut molestias saepe? Enim amet cum repellendus saepe, laudantium quia laborum doloribus tempore reprehenderit laboriosam odio, porro illo architecto vero voluptatibus assumenda! Cum quod excepturi veniam recusandae rem nostrum quidem earum provident modi possimus in minima amet, error repellat ipsum beatae, accusantium et natus sit officiis sunt laudantium ex? Quidem omnis minima, beatae ab, delectus quae ipsum optio distinctio expedita excepturi aliquam?",
  },
  {
    id: 4,
    name: "David Martinez",
    role: "Customer Relations",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=500&fit=crop",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum officiis possimus beatae ipsam, alias sapiente corporis, similique vero asperiores voluptates ratione neque sit magnam velit quas suscipit? Fuga id harum inventore tempora magni, numquam error suscipit, adipisci enim ut molestias saepe? Enim amet cum repellendus saepe, laudantium quia laborum doloribus tempore reprehenderit laboriosam odio, porro illo architecto vero voluptatibus assumenda! Cum quod excepturi veniam recusandae rem nostrum quidem earum provident modi possimus in minima amet, error repellat ipsum beatae, accusantium et natus sit officiis sunt laudantium ex? Quidem omnis minima, beatae ab, delectus quae ipsum optio distinctio expedita excepturi aliquam?",
  },
  {
    id: 5,
    name: "Lisa Anderson",
    role: "Marketing Director",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&h=500&fit=crop",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum officiis possimus beatae ipsam, alias sapiente corporis, similique vero asperiores voluptates ratione neque sit magnam velit quas suscipit? Fuga id harum inventore tempora magni, numquam error suscipit, adipisci enim ut molestias saepe? Enim amet cum repellendus saepe, laudantium quia laborum doloribus tempore reprehenderit laboriosam odio, porro illo architecto vero voluptatibus assumenda! Cum quod excepturi veniam recusandae rem nostrum quidem earum provident modi possimus in minima amet, error repellat ipsum beatae, accusantium et natus sit officiis sunt laudantium ex? Quidem omnis minima, beatae ab, delectus quae ipsum optio distinctio expedita excepturi aliquam?",
  },
];

export default function TeamMembers() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex(
      (prev) => (prev - 1 + teamMembers.length) % teamMembers.length
    );
  };

  const getOrderedMembers = () => {
    const ordered = [];
    for (let i = 0; i < teamMembers.length; i++) {
      const index = (activeIndex + i) % teamMembers.length;
      ordered.push(teamMembers[index]);
    }
    return ordered;
  };

  const orderedMembers = getOrderedMembers();
  const activeMember = orderedMembers[0];
  const nextThree = orderedMembers.slice(1, 4);

  return (
    <>
      <HeroSection2 />
      <section className="min-h-screen bg-gray-50 relative py-20 px-6">
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="mb-16 flex items-center flex-col">
            <h2 className="text-4xl md:text-7xl font-bold text-gray-900 mb-4 text-center">
              Our Team
            </h2>
            <p className="text-center max-w-3xl text-lg md:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Distinctio delectus quos nesciunt quis, ex, reiciendis veniam
              quisquam mollitia veritatis nisi excepturi nihil similique eveniet
              quibusdam aut. Modi nisi molestias vel expedita ea assumenda ab
              tenetur.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left Side - Active Member Photo */}
            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-gray-200 shadow-lg">
                <img
                  key={activeMember.id}
                  src={activeMember.image}
                  alt={activeMember.name}
                  className="w-full h-full object-cover transition-all duration-500"
                  style={{
                    opacity: 1,
                    transform: `translateX(${direction * 0}px)`,
                  }}
                />
              </div>
            </div>

            {/* Right Side - Description and Next Members */}
            <div className="flex flex-col h-full space-y-8">
              {/* Active Member Description */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-4xl font-bold text-gray-900 mb-2">
                    {activeMember.name}
                  </h3>
                  <p className="text-lg text-teal-600 font-medium">
                    {activeMember.role}
                  </p>
                </div>
                <div className="h-48 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
                  <p className="text-gray-700 text-lg leading-relaxed pr-2">
                    {activeMember.description}
                  </p>
                </div>
              </div>

              {/* Bottom Right - Next 3 Members */}
              <div className="space-y-6">
                <div className="space-y-3">
                  {nextThree.map((member, idx) => (
                    <div
                      key={member.id}
                      className="group cursor-pointer bg-white hover:bg-gray-50 border border-gray-200 rounded-xl p-4 transition-all duration-300 flex items-center gap-4 shadow-sm hover:shadow-md"
                      onClick={() => {
                        setDirection(1);
                        setActiveIndex(
                          (activeIndex + idx + 1) % teamMembers.length
                        );
                      }}
                    >
                      <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-gray-900 font-semibold truncate">
                          {member.name}
                        </p>
                        <p className="text-teal-600 text-sm truncate">
                          {member.role}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Navigation Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={handlePrev}
                    className="flex-1 bg-white border-2 border-gray-300 hover:border-gray-400 text-gray-700 py-3 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2 font-medium shadow-sm"
                  >
                    <ChevronLeft size={20} />
                    Previous
                  </button>
                  <button
                    onClick={handleNext}
                    className="flex-1 bg-teal-500 hover:bg-teal-600 text-white py-3 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2 font-medium shadow-sm"
                  >
                    Next
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
