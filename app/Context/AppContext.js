// AppContext.js
import React, { createContext, useContext, useState, useEffect, useMemo, useRef, useCallback } from 'react';
import Data from "../../mockData.json"

const AppContext = createContext(null);

export const useAppContext = () => {
    return useContext(AppContext);
};

export const AppProvider = ({ children }) => {
    // Define your context's state, functions, or values here
    const someValue = 'Hello from AppContext!';
    const bottomSheetModalRef = useRef(null);
    const [isSheetOpen, setIsSheetOpen] = useState(false);
    const [isLabelVisible, setIsLabelVisible] = useState({});
    const [data,setData]=  useState([Data])
    const toggleLabelVisibility = (index) => {
        setIsLabelVisible(index)
    };

    const snapPoints = useMemo(() => ['95%']);

    const handlePresentModalPress = useCallback(() => {
        if (bottomSheetModalRef.current) {
            if (isSheetOpen) {
                bottomSheetModalRef.current?.dismiss();
            } else {
                bottomSheetModalRef.current?.present();
            }
            setIsSheetOpen(!isSheetOpen);
        }
    }, [bottomSheetModalRef, isSheetOpen]);
    const handleSheetChanges = useCallback((index) => {
        if (index == -1) {
            setIsSheetOpen(false);
        }
    }, []);
    const handleGestureEvent = useCallback(({ nativeEvent }) => {
        if (nativeEvent.translationY > 50) {
            bottomSheetModalRef.current?.dismiss();
        }
    }, [bottomSheetModalRef]);

    const contextValue = {
        handleGestureEvent,
        handlePresentModalPress,
        handleSheetChanges,
        bottomSheetModalRef,
        snapPoints,
        // handleSheetChanges,
        someValue,
        isLabelVisible,
        setIsLabelVisible,
        toggleLabelVisibility,
        data
    };

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    );
};
