import BasicLayout from '../../layouts/Basic'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import {derivationPaths} from "../../utils/const";

export default function Index() {
    return (
        <BasicLayout>
            <div className='mx-auto mx-12'>
                <Tabs>
                    <TabList>
                        {derivationPaths.map((path)=> {
                            return (
                                <Tab>{path}</Tab>
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
