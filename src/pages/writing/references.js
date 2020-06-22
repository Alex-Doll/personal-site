/** @jsx jsx */
import { Heading, jsx, Link, Text } from 'theme-ui';

import Layout from 'components/layout';
import { Link as AppLink } from 'components/link';
import SEO from 'components/seo';

export default function References() {
    return (
        <Layout>
            <SEO title='Writing References' />
            <Heading as='h1'>References</Heading>

            <section
                sx={{
                    marginY: 5,
                }}
            >
                <Heading as='h3'>Story Circle - Dan Harmon</Heading>
                <Text variant='default'>This is Dan Harmon's series of blogposts on Channel 101 that discuss story structure, specifically the "Story Circle"</Text>
                <ul>
                    <li><Link href='https://channel101.fandom.com/wiki/Story_Structure_101:_Super_Basic_Shit' target='_blank'>Story Structure 101: Super Basic Shit</Link></li>
                    <li><Link href='https://channel101.fandom.com/wiki/Story_Structure_102:_Pure,_Boring_Theory' target='_blank'>Story Structure 102: Pure, Boring Theory</Link></li>
                    <li><Link href='https://channel101.fandom.com/wiki/Story_Structure_103:_Let%27s_Simplify_Before_Moving_On' target='_blank'>Story Structure 103: Let's Simplify Before Moving On</Link></li>
                    <li><Link href='https://channel101.fandom.com/wiki/Story_Structure_104:_The_Juicy_Details' target='_blank'>Story Structure 104: The Juicy Details</Link></li>
                    <li><Link href='https://channel101.fandom.com/wiki/Story_Structure_105:_How_TV_is_Different' target='_blank'>Story Structure 105: How TV is Different</Link></li>
                    <li><Link href='https://channel101.fandom.com/wiki/Story_Structure_106:_Five_Minute_Pilots' target='_blank'>Story Structure 106: Five Minute Pilots</Link></li>
                </ul>
            </section>

            <section
                sx={{
                    marginY: 5,
                }}
            >
                <Heading as='h3'>Invisible Ink - Brian McDonald</Heading>
                <Text variant='default'>These are some of the most important notes I've gathered from Brian McDonald's incredible book "Invisible Ink: A Practical Guide to Building Stories that Resonate"</Text>
                <ul>
                    <li>TBD</li>
                </ul>
            </section>

            <section
                sx={{
                    marginY: 5,
                }}
            >
                <Heading as='h3'>The Golden Theme - Brian McDonald</Heading>
                <Text variant='default'>These are some of the most important notes I've gathered from Brian McDonald's incredible book "The Golden Theme: How to Make Your Writing Appeal to the Highest Common Denominator"</Text>
                <ul>
                    <li>TBD</li>
                </ul>
            </section>
            <AppLink to='/writing' variant='mono'>Back</AppLink>
        </Layout>
    );
}
