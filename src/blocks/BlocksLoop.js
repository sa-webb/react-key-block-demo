import React, { Component } from 'react'
import HeadingBlock from './HeadingBlock'
import TextBlock from './TextBlock'
import ImageBlock from './ImageBlock'
import ListBlock from './ListBlock'

export default class BlocksLoop extends Component {
    constructor() {
      super()
      this.getBlockComponent = this.getBlockComponent.bind(this)
    }
  
    getBlockComponent(block) {
      switch (block.type) {
        case 'heading':
          return <HeadingBlock key={block.id} {...block} />
  
        case 'text':
          return <TextBlock key={block.id} {...block} />
  
        case 'image':
          return <ImageBlock key={block.id} {...block} />
  
        case 'list':
          return <ListBlock key={block.id} {...block} />
  
        default:
          return <div className="no_block_type" />
      }
    }
  
    render() {
      return (
        <div className="blocks_loop">
          {this.props.blocks.map(block => this.getBlockComponent(block))}
        </div>
      )
    }
  }