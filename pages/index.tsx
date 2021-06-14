import Head from 'next/head'
import Image from 'next/image'
import Layout, { siteTitle } from '../components/Layouts/Layout'
import { getSortedPostsData } from '../lib/posts'
import { GetStaticProps } from 'next'
import React from 'react'
import BlogItem from '../components/Blog/BlogItem'
import HeaderContent from '../components/HeaderContent/HeaderContent'

export default function Home({
  allPostsData
}: {
  allPostsData: {
    date: string
    title: string
    id: string
    image: string
  }[]
}) {
  return (
    <Layout headerContent={<HeaderContent />}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className='w-full bg-off-white'>
        <div className='w-full flex flex-1 justify-center z-10 py-10 px-5'>
          <div className='max-w-7xl'>
            <div id='blog' className='flex flex-col'>
              <h1>Blog</h1>
              <div className='flex w-full flex-1 justify-center'>
                <ul className='grid md:grid-cols-2 xl:grid-cols-3'>
                  {allPostsData.map(({ id, date, title, image }) => (
                    <li className='p-5' key={id}>
                      <BlogItem id={id} date={date} title={title} image={image} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}