import React, { useRef, useEffect, useContext } from 'react';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { useAppContext } from '../../Context/AppContext';
import styles from './styles';

const CustomBottomSheetModal = ({component }) => {
//   const bottomSheetModalRef = useRef(null);
  const { handlePresentModalPress, bottomSheetModalRef, snapPoints, handleSheetChanges } = useAppContext();

//   useEffect(() => {
//     // Logic to handle changes in bottom sheet modal
//     if (bottomSheetModalRef.current) {
//       // You might want to handle changes here
//       // Example: bottomSheetModalRef.current.snapTo(index);
//     }
//   }, [index, snapPoints]);

  return (
    <BottomSheetModal
      ref={bottomSheetModalRef}
      index={0}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
      style={styles.container}
      handleIndicatorStyle={{display:'none'}}
      backgroundComponent={null}
    >
      {component}
    </BottomSheetModal>
  );
};

export default CustomBottomSheetModal;
