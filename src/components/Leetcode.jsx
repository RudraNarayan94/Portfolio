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
        setStats({ solved: data.totalSolved, streak: "500+" });
      } catch (err) {
        console.error("Failed to fetch LeetCode stats", err);
        setError(true);
      }
    };

    fetchStats();
  }, []);

  if (error)
    return (
      <p className="text-center text-red-500 my-8">
        Unable to load LeetCode stats.
      </p>
    );
  if (!stats)
    return (
      <div className="flex items-center justify-center h-40 my-8">
        <motion.div
          className="w-10 h-10 border-4 border-t-orange-500 border-stone-700 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        />
      </div>
    );

  const { solved, streak } = stats;

  return (
    <a
      href="https://leetcode.com/u/rudra404"
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full px-4 sm:px-0">
      <section
        className="mx-auto my-8 w-full max-w-md sm:max-w-3xl p-4 sm:p-8 bg-transparent rounded-2xl border-2 border-orange-500 cursor-pointer hover:shadow-orange-400 transition-shadow duration-300"
        style={{
          backdropFilter: "blur(10px)",
          boxShadow: "0 0 20px rgba(246,149,5,0.7)",
        }}>
        <div className="flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-orange-600 text-orange-400">
          {/* Shield Icon */}
          <div className="flex-1 flex flex-col items-center justify-center py-4 px-2">
            <motion.div
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 200 }}>
              <FaShieldAlt className="text-3xl sm:text-4xl mb-1" />
            </motion.div>
            <span className="mt-1 text-xs sm:text-sm font-bold uppercase">
              knight
            </span>
          </div>

          {/* Solved Questions */}
          <div className="flex-1 flex flex-col items-center justify-center py-4 px-2">
            <p className="text-xs sm:text-sm uppercase">Solved Questions</p>
            <p className="text-2xl sm:text-3xl font-extrabold">{solved}</p>
          </div>

          {/* Current Streak with Flame Glow */}
          <div className="flex-1 flex flex-col items-center justify-center py-4 px-2">
            <div className="flex items-center gap-1 sm:gap-2">
              <GiFlame className="text-2xl sm:text-3xl" />
              <p className="text-xs sm:text-sm uppercase">Streak</p>
            </div>
            <p className="text-2xl sm:text-3xl font-extrabold glow animate-pulse">
              {streak}
            </p>
          </div>
        </div>
      </section>
    </a>
  );
};

export default Leetcode;
