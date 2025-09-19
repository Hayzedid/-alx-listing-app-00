import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import { PROPERTYLISTINGSAMPLE, HERO_BACKGROUND_IMAGE } from '../constants'
import PropertyCard from '../components/common/PropertyCard'
import Pill from '../components/common/Pill'

const Home: NextPage = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All')
  
  const filterOptions = [
    'All',
    'Top Villa',
    'Self Checkin',
    'Pool',
    'Mountain View',
    'Beachfront',
    'City View',
    'Pet Friendly'
  ]

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter)
  }

  return (
    <div className="min-h-screen">
      <Head>
        <title>ALX Listing App - Find Your Perfect Stay</title>
        <meta name="description" content="Discover amazing places to stay around the world. From luxury villas to cozy cabins, find your perfect getaway." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <section 
        className="relative h-96 flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_BACKGROUND_IMAGE})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Find your favorite place here!
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            The best prices for over 2 million properties worldwide.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
            Start Exploring
          </button>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Filter by Type</h2>
          <div className="flex flex-wrap gap-3">
            {filterOptions.map((filter) => (
              <Pill
                key={filter}
                label={filter}
                isActive={activeFilter === filter}
                onClick={() => handleFilterClick(filter)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Property Listings Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              {PROPERTYLISTINGSAMPLE.length} Properties Found
            </h2>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Sort by:</span>
              <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Recommended</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Rating</option>
              </select>
            </div>
          </div>

          {/* Property Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {PROPERTYLISTINGSAMPLE.map((property, index) => (
              <PropertyCard key={index} property={property} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
