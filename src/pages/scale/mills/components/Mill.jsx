import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useEffect, useState } from 'react';
import styles from './mill.module.scss';
import { Button } from '@mui/material';
import { ArrowRightAltSharp } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMills } from '../../../../features/scale/ScaleActions';
const Mill = () => {
    const dispatch = useDispatch();
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    const navigate = useNavigate();
    const handleClickOpen = () => {
        navigate('/scale');
    };
    useEffect(() => {
        dispatch(getAllMills())
    }, [dispatch]);
    const mills = useSelector(state => state.scale.millsInfo)
    console.log(mills, "millasdasds")
    return (
        <div className="container">

            <Button
                variant="outlined"
                className={`my-3 ${styles.create__visit__btn}`}
                onClick={handleClickOpen}
                startIcon={<ArrowRightAltSharp />}
                color='success'
            >
                <span className='mx-2'>العوده</span>
            </Button>
            {
                mills.map((mill, index) => {
                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className={`${styles.mile__Accord} my-2 col-8 `}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                            className={styles.mile__summary}
                        >
                            <div className={styles.source__quantity__summary}>
                                <Typography >اسم الجهة </Typography>
                                <Typography > مطاحن بنها الجديده</Typography>
                            </div>
                            <div className={`${styles.source__quantity__summary} mx-3`}>
                                <Typography > الكمية المتبقية :</Typography>
                                <Typography >1500</Typography>
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography fontWeight={'bold'} className='my-2'>
                                الكمية المقرره  : 8000 كيلو جرام
                            </Typography>
                            <Typography fontWeight={'bold'} className='my-2'>
                                اخر موعد صرف : 12/12/2021
                            </Typography>
                            <Typography fontWeight={'bold'} className='my-2'>
                                موعد الصرف القادم : 12/12/2021
                            </Typography>
                            <Typography fontWeight={'bold'} className='my-2'>
                                نوع القمح : روسي درجة 22.5
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                }
                )

            }

        </div>
    )
}

export default Mill