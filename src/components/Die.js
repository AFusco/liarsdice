import React from "react"
import { faDiceOne, 
    faDiceTwo, 
    faDiceThree, 
    faDiceFour, 
    faDiceFive, 
    faDiceSix,
    faQuestion,
    faTimes} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Die extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            pips: this.props.pips,
            icon: this.getIconForPips(this.props.pips)
        }

        this.rollDie(512, 4, 0, 6);
    }

    getIconForPips(noOfPips) {
        switch (noOfPips) {
            case -1:
                return faTimes
            case 0:
                return faQuestion
            case 1:
                return faDiceOne
            case 2:
                return faDiceTwo
            case 3:
                return faDiceThree
            case 4:
                return faDiceFour
            case 5:
                return faDiceFive
            case 6:
                return faDiceSix
            default:
                return null
        }
    }

    rollDie(max, millis, curFrames, maxFrames) {
        if (millis >= max) 
            this.setState({
                icon: this.getIconForPips(this.state.pips)
            })
        else {
            this.setState({ icon: this.getIconForPips(Math.floor(Math.random() * Math.floor(6)) + 1) })
            const newMillis = (curFrames == maxFrames) ? millis*2: millis
            setTimeout(() => this.rollDie(max,  newMillis, (curFrames == maxFrames) ? 0 : curFrames + 1, maxFrames), newMillis)
        }
    }

    changePips(noOfPips) {
        if (noOfPips >= 1 && noOfPips <= 6)
            this.setState({
                pips: noOfPips,
                icon: this.getIconForPips(noOfPips)
            })
    }

    render() {
        return (
            <div className="die">
                <FontAwesomeIcon icon={this.state.icon} />
            </div>)
    }
}

export default Die