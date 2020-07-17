import React from 'react'
import { ColorExtractor } from 'react-color-extractor'

export default class Text extends React.Component {
  state = { colors: [] }

  renderSwatches = () => {
    const { colors } = this.state

    return colors.map((color, id) => {
      return (
        <div
          key={id}
          style={{
            backgroundColor: color,
            width: 100,
            height: 100
          }}
        />
      )
    })
  }

  getColors = colors => {
    console.log("colors",colors)
    this.setState(state => ({ colors: [...state.colors, ...colors] }))
  }

  render() {
    return (
      <div>
        <ColorExtractor getColors={this.getColors}>
          <img
            alt=""
            src={require("./123.jpg")}
            style={{ width: 100, height: 500 }}
          />
        </ColorExtractor>



        <div
          style={{
            marginTop: 20,
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          {this.renderSwatches()}
        </div>
      </div>
    )
  }
}