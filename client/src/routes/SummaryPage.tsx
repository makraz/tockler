import React from 'react';
import { MainLayout } from '../components/MainLayout/MainLayout';
import { SummaryCalendar } from '../components/SummaryCalendar/SummaryCalendar';
import { SummaryProvider } from '../SummaryContext';
import { LineChart } from '../components/LineCharts/LineChart';
import { LineChartBox } from '../components/LineCharts/LineCharts.styles';

export function SummaryPage({ location }: any) {
    return (
        <MainLayout location={location}>
            <SummaryProvider>
                <SummaryCalendar />
                <LineChartBox>
                    <LineChart />
                </LineChartBox>
            </SummaryProvider>
        </MainLayout>
    );
}
