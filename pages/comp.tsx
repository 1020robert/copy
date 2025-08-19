import { css } from '@emotion/react';
import { PageHeader } from '../components/contents/section';

const CompPage = (): JSX.Element => {
  return (
    <div
      css={css`
        text-align: center;
        padding: 48px 32px;
      `}
    >
      <PageHeader title="Comp" />
      <div
        css={css`
          max-width: 500px;
          margin: 0 auto;
          text-align: left;
          width: 80%;

          a {
            color: black;
            font-style: italic;
          }
        `}
      >
        Introductory meetings for the Harvard Lampoon&apos;s Spring 2025 Comp
        will be held at 44 Bow Street on Sunday 2/2, Monday 2/3, Tuesday 2/4,
        and Wednesday 2/5 at 8:00pm. Refreshments will be served.
        <br />
        <br />
        Additionally, there will be an offsite comp meeting held at the Lowell
        Screening Room on 2/8 at 12:00pm.
        <br />
        <br />
        Comps for the Lit, Art, Biz, and Tech Boards will be held this semester.
        Comps are limited to the undergraduate students of Harvard University.
        No academic Seniors.
        <br />
        <br />
        Direct general inquiries to info@harvardlampoon.com.
        <br />
        <br />
        To submit anonymous questions or concerns about our comp, please contact
        Kian Solis at kian@harvardlampoon.com or Dylan Ragas at
        ragas@harvardlampoon.com.
        <br />
        <br />
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfOb2rUnpe_bgPGKkLShL-QE0A81_FmCCcf0SPt723B0J_nkA/viewform">
          Spring 2025 Comp Sign-Up Form
        </a>
      </div>
    </div>
  );
};

export default CompPage;
