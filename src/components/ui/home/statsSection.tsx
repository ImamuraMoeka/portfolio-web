import { FC } from "react";

export const StatsSection: FC = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="text-center">
          <h3 className="text-4xl font-bold text-rose-500">5+</h3>
          <p className="text-gray-600 mt-2">Years Experience</p>
        </div>
        <div className="text-center">
          <h3 className="text-4xl font-bold text-rose-500">50+</h3>
          <p className="text-gray-600 mt-2">Projects Completed</p>
        </div>
        <div className="text-center">
          <h3 className="text-4xl font-bold text-rose-500">15+</h3>
          <p className="text-gray-600 mt-2">Countries Visited</p>
        </div>
        <div className="text-center">
          <h3 className="text-4xl font-bold text-rose-500">30+</h3>
          <p className="text-gray-600 mt-2">Happy Clients</p>
        </div>
      </div>
    </section>
  );
};
