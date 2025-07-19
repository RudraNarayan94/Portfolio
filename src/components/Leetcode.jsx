import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaShieldAlt } from "react-icons/fa";
import { GiFlame } from "react-icons/gi";

const Leetcode = () => {
  const [stats, setStats] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch(
          "https://leetcode-stats-api.herokuapp.com/rudra404"
        );
        const data = await response.json();
        // You can fetch streak separately if you need real data
        setStats({ solved: data.totalSolved, streak: "500+" });
      } catch (err) {
        console.error("Failed to fetch LeetCode stats", err);
        setError(true);
      }
    };

    fetchStats();
  }, []);

  if (error) {
    return (
      <p className="text-center text-red-500 my-20">
        Unable to load LeetCode stats.
      </p>
    );
  }

  if (!stats) {
    return (
      <div className="flex items-center justify-center h-64 my-20">
        <motion.div
          className="w-12 h-12 border-4 border-t-orange-500 border-stone-700 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        />
      </div>
    );
  }

  const { solved, streak } = stats;

  return (
    <a
      href="https://leetcode.com/u/rudra404"
      target="_blank"
      rel="noopener noreferrer"
      className="block">
      <section
        className="relative my-20 mx-auto max-w-3xl p-8 bg-transparent rounded-2xl border-2 border-orange-500 cursor-pointer hover:shadow-orange-400 transition-shadow duration-300"
        style={{
          backdropFilter: "blur(10px)",
          boxShadow: "0 0 20px rgba(246, 149, 5, 0.7)",
        }}>
        <div className="flex divide-x divide-orange-600 text-orange-400">
          {/* Shield Icon */}
          <div className="flex-1 flex flex-col items-center justify-center px-6">
            <motion.div
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 200 }}>
              <FaShieldAlt className="text-4xl mb-2 text-orange-400" />
            </motion.div>
            <span className="mt-2 text-sm font-bold tracking-widest text-orange-400">
              KNIGHT
            </span>
          </div>

          {/* Solved Questions */}
          <div className="flex-1 flex flex-col items-center justify-center px-6">
            <p className="text-sm uppercase text-orange-400">
              Solved Questions
            </p>
            <p className="text-4xl font-extrabold text-orange-400">{solved}</p>
          </div>

          {/* Current Streak with Flame Glow */}
          <div className="flex-1 flex flex-col items-center justify-center px-6">
            <div className="flex items-center gap-2 text-orange-400">
              <GiFlame className="text-3xl" />
              <p className="text-sm uppercase">Streak</p>
            </div>
            <p className="text-4xl font-extrabold flex items-center text-orange-400 glow animate-pulse">
              {streak}
            </p>
          </div>
        </div>
      </section>
    </a>
  );
};

export default Leetcode;
