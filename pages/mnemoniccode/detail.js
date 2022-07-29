import BasicLayout from '../../layouts/Basic'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import {derivationPaths} from "../../utils/const";

export default function Index() {

    const reload = ()=> {

    }

    return (
        <BasicLayout>
            <div className='mx-auto mx-12'>
                <Tabs
                    align='center'
                    variant='enclosed'
                    className='mt-4'
                >
                    <TabList>
                        {derivationPaths.map((path)=> {
                            return (
                                <Tab
                                    onClick={()=>{
                                        console.log(path)
                                    }}
                                    key={path}
                                >{path}</Tab>
                            )
                        })}
                    </TabList>
                    <TabPanels>
                        {derivationPaths.map((path)=> {
                            return (
                                <TabPanel>
                                    <p>Stay Tuned</p>
                                </TabPanel>
                            )
                        })}
                    </TabPanels>
                </Tabs>
            </div>
        </BasicLayout>
    )
}
