import { useEffect, useState } from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import { FaXTwitter } from 'react-icons/fa6'

export default function ComingSoon() {
  const calculateTimeLeft = () => {
    const targetDate = new Date('2025-11-02T00:00:00');
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black via-[#070707] to-[#0b0b0b] text-white flex flex-col items-center justify-center overflow-hidden">
      <Head>
        <title>GRUMP Metaverse — Coming Soon</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="svg" href="/favicon.svg" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
      </Head>

      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-gradient-to-r from-yellow-400/20 to-transparent rounded-full blur-3xl opacity-30"></div>
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-gradient-to-r from-amber-400/10 to-transparent rounded-full blur-3xl opacity-20"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="relative z-10 flex flex-col items-center text-center px-6"
      >
        {/* Logo */}
        <div className="mb-8">
          <div className="w-48 h-48 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center shadow-2xl">
            <span className="text-black font-extrabold text-3xl">GRUMP</span>
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-400 bg-clip-text text-transparent">
          Coming Soon
        </h1>

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-6 flex gap-4 md:gap-8 text-center"
        >
          {[
            { label: 'Days', value: timeLeft.days },
            { label: 'Hours', value: timeLeft.hours },
            { label: 'Minutes', value: timeLeft.minutes },
            { label: 'Seconds', value: timeLeft.seconds },
          ].map((unit, i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
              className="flex flex-col items-center"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl bg-gradient-to-br from-yellow-500/10 to-amber-400/10 border border-yellow-400/30 flex items-center justify-center shadow-[0_0_20px_rgba(250,204,21,0.15)]">
                <span className="text-3xl md:text-4xl font-bold text-yellow-400">
                  {String(unit.value).padStart(2, '0')}
                </span>
              </div>
              <span className="mt-2 text-sm text-gray-400 uppercase tracking-wider">
                {unit.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <p className="mt-8 text-gray-300 max-w-2xl text-lg">
          The <span className="text-yellow-400 font-semibold">GRUMP Metaverse</span> is launching soon.
          Your GRUMP GANG NFT is your identity in the Metaverse — mint it now and reserve your character.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a
            href="https://launchmynft.io/sol/20768"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-bold rounded-xl shadow-[0_10px_30px_rgba(250,204,21,0.18)] hover:scale-105 transition-transform"
          >
            🚀 Mint GRUMP NFT
          </a>

          <a
            href="https://x.com/kybroxas"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 border border-white/20 rounded-xl hover:bg-white/5 transition-colors"
          >
            <FaXTwitter className="text-xl" />
            Follow on X
          </a>
        </div>

        <p className="mt-6 text-sm text-gray-400">Want to be notified? Join our list Now.</p>
      </motion.div>

      {/* Footer motion */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-6 text-sm text-gray-500 z-10"
      >
        Powered by <span className="text-yellow-400">Solana</span> ⚡ — GRUMP Metaverse © 2025
      </motion.div>
    </div>
  )
}
