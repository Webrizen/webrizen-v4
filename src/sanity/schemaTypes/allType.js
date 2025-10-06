import { CodeIcon, PackageIcon, InfoFilledIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export const projectType = defineType({
  name: 'project',
  title: 'Projects',
  type: 'document',
  icon: CodeIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'description',
      type: 'text'
    }),
    defineField({
      name: 'division',
      type: 'string',
      options: {
        list: [
          { title: 'Labs', value: 'labs' },
          { title: 'Studio', value: 'studio' },
          { title: 'Core', value: 'core' },
        ]
      },
    }),
    defineField({
      name: 'status',
      type: 'string',
      options: {
        list: [
          { title: 'Research', value: 'research' },
          { title: 'Active', value: 'active' },
          { title: 'Completed', value: 'completed' },
          { title: 'Prototype', value: 'prototype' },
          { title: 'Archived', value: 'archived' },
        ]
      },
    }),
    defineField({
      name: 'technologies',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
    }),
    defineField({
      name: 'mainImage',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        })
      ]
    }),
    defineField({
      name: 'gallery',
      type: 'array',
      of: [defineArrayMember({ type: 'image' })],
    }),
    defineField({
      name: 'demoUrl',
      type: 'url',
      title: 'Demo URL'
    }),
    defineField({
      name: 'githubUrl',
      type: 'url',
      title: 'GitHub URL'
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
    }),
    defineField({
      name: 'body',
      type: 'blockContent',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      division: 'division',
      media: 'mainImage',
    },
    prepare(selection) {
      const { division } = selection
      return { ...selection, subtitle: division && `in ${division}` }
    },
  },
})

export const toolType = defineType({
  name: 'tool',
  title: 'Tools',
  type: 'document',
  icon: PackageIcon,
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
      },
    }),
    defineField({
      name: 'tagline',
      type: 'string',
    }),
    defineField({
      name: 'description',
      type: 'text'
    }),
    defineField({
      name: 'price',
      type: 'string',
      options: {
        list: [
          { title: 'Free', value: 'free' },
          { title: 'Paid', value: 'paid' },
          { title: 'Open Source', value: 'open-source' },
          { title: 'Freemium', value: 'freemium' },
        ]
      },
    }),
    defineField({
      name: 'category',
      type: 'string',
    }),
    defineField({
      name: 'features',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
    }),
    defineField({
      name: 'liveUrl',
      type: 'url',
      title: 'Live URL'
    }),
    defineField({
      name: 'screenshot',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        })
      ]
    }),
    defineField({
      name: 'status',
      type: 'string',
      options: {
        list: [
          { title: 'Live', value: 'live' },
          { title: 'Beta', value: 'beta' },
          { title: 'Development', value: 'development' },
          { title: 'Deprecated', value: 'deprecated' },
        ]
      },
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      status: 'status',
      media: 'screenshot',
    },
    prepare(selection) {
      const { status } = selection
      return { ...selection, subtitle: status }
    },
  },
})

export const articleType = defineType({
  name: 'article',
  title: 'Articles',
  type: 'document',
  icon: InfoFilledIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'excerpt',
      type: 'text'
    }),
    defineField({
      name: 'coverImage',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        })
      ]
    }),
    defineField({
      name: 'author',
      type: 'reference',
      to: { type: 'author' },
    }),
    defineField({
      name: 'categories',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
    }),
    defineField({
      name: 'tags',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
    }),
    defineField({
      name: 'readTime',
      type: 'number',
      title: 'Read Time (minutes)'
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
    }),
    defineField({
      name: 'body',
      type: 'blockContent',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'coverImage',
    },
    prepare(selection) {
      const { author } = selection
      return { ...selection, subtitle: author && `by ${author}` }
    },
  },
})