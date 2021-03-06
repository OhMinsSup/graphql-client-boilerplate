import React from 'react';
import { connect } from 'react-redux';
import { openGrally } from '../../store/modules/base';
import IllustrationCards from '../../components/common/Illustration/IllustrationCards';
import { StoreState } from '../../store/modules';

interface OwnProps {}
interface StateProps {}
interface DispatchProps {
  openGrally: typeof openGrally;
}
type IllustrationListProps = StateProps & DispatchProps & OwnProps;

class IllustrationList extends React.Component<IllustrationListProps> {
  onOpen = () => {
    const { openGrally } = this.props;
    openGrally();
  };
  render() {
    return <IllustrationCards onOpen={this.onOpen} />;
  }
}

export default connect<StateProps, DispatchProps, OwnProps, StoreState>(
  () => ({}),
  {
    openGrally,
  },
)(IllustrationList);
