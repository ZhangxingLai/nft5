import TextField from '@material-ui/core/TextField'
import { Container, Button } from '../../globalStyles'
import BidTable from '../../components/BidTable/BidTable'
import {
    DetailSection,
    DetailRow,
    DetailColumn,
    DetailSingleColumn,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BidInputRow,
    BidInputColumn,
    ImgWrapper,
    Img
} from '../../components/AuctionDetail/AuctionDetail.style'

const AuctionDetail = (props) => {

    // render BID button
    const RenderButton = () => {
//        console.log(`AucDetail ${JSON.stringify(props)}`)

        if (props.status === 1) {
            return (
                <Button big fontBig disabled={false} onClick={props.placeBid}>
                    Submit Bid
                </Button>
            )
        } else if (props.status === 2) {
            return (
                <Button big fontBig closed disabled={props.winner === props.account ? false : true} onClick={props.releaseFund} >
                    Confirm Receipt
                </Button>
            )
        } else if (props.status === -1) {
            return (
                <Button big fontBig closed disabled={true} >
                    Auction Closed
                </Button>
            )
        } else {
            return (
                <Button big fontBig disabled={true} >
                    Auction Not Started
                </Button>
            )
        }
    }
    
    return (
        <>
            <DetailSection lightBg={true}>
                <Container>
                    <DetailRow imgStart={'start'}>
                        <DetailColumn>
                            <TextWrapper>
                                <Subtitle>Your Account:</Subtitle>
                                <TopLine lightTopLine>{props.account}</TopLine>
                                <Subtitle>Balance:</Subtitle>
                                <TopLine lightTopLine>{props.balance}</TopLine>
                                <br /><br /><br /><br />
                                <Subtitle lightTextDesc={false}>
                                    Auction Time: {props.starttime ? props.starttime.toLocaleString("en") : ""}
                                    <br />
                                    Duration: {props.duration} min
                                </Subtitle>
                                <br /><br />
                                <TopLine lightTopLine>
                                    Starting Bid: {props.startbid} SMT
                                    <br /><br />
                                    Current Bid: {props.currentbid} SMT
                                </TopLine>
                            </TextWrapper>
                            <BidInputRow>
                                <BidInputColumn>
                                    <TextField
                                        id="bidInput"
                                        label="Bid"
                                        defaultValue="0"
                                        helperText="Enter bid in SMT"
                                        variant="outlined"
                                        onChange={(e) => { props.updateBidInput(e.target.value) }} />
                                </BidInputColumn>
                                <BidInputColumn>
                                    {RenderButton()}
                                </BidInputColumn>
                            </BidInputRow>
                        </DetailColumn>
                        <DetailColumn>
                            <TextWrapper>
                                <Heading lightText={false}>{props.title}</Heading>
                                <TopLine lightTopLine>Seller: {props.seller}</TopLine>
                                <Subtitle>{props.description}</Subtitle>
                            </TextWrapper>
                            <ImgWrapper start={'start'}>
                                <Img src={window.location.origin+'/'+props.image} alt={'no pic'} />
                            </ImgWrapper>
                        </DetailColumn>
                    </DetailRow>

                    <DetailRow>
                        <DetailSingleColumn>
                            <br /><br />
                            <BidTable id={props._id} />
                        </DetailSingleColumn>
                    </DetailRow>
                </Container>
            </DetailSection>
        </>
    )
}

export default AuctionDetail;