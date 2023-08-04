import React, { useRef } from 'react'
import { useReactToPrint } from 'react-to-print';

const usePDF = (docu, nombreGuardar = 'porta') => {

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: nombreGuardar,
        // onAfterPrint:() => alert('imprimiendoo...') 
    })


    const documento = (
        <div ref={componentRef}>
            {docu}
        </div>
    )



    return { documento, handlePrint }
}

export default usePDF