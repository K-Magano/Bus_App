import { GridRow, GridColumn, Grid, Image } from 'semantic-ui-react'

const GridExampleDividedNumber = () => (
  <Grid columns={3} divided>
    <GridRow>
      <GridColumn>
        <Image src='/images/wireframe/media-paragraph.png' />
      </GridColumn>
      <GridColumn>
        <Image src='/images/wireframe/media-paragraph.png' />
      </GridColumn>
      <GridColumn>
        <Image src='/images/wireframe/media-paragraph.png' />
      </GridColumn>
    </GridRow>

    <GridRow>
      <GridColumn>
        <Image src='/images/wireframe/media-paragraph.png' />
      </GridColumn>
      <GridColumn>
        <Image src='/images/wireframe/media-paragraph.png' />
      </GridColumn>
      <GridColumn>
        <Image src='/images/wireframe/media-paragraph.png' />
      </GridColumn>
    </GridRow>
  </Grid>
)

export default GridExampleDividedNumber