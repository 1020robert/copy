import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import { getArchivePublicationWithId } from '../../server-lib/archives';
import { useEffect } from 'react';

interface ArchiveEmbedPageProps {
  embedUrl: string;
}

const ArchiveEmbed = (props: ArchiveEmbedPageProps): JSX.Element => {
  useEffect(() => {
    const scripts = ['/vendor/dflip/js/dflip.min.js'];

    (window as any).option_pdf_embed = {
      soundEnable: false,
      source: props.embedUrl,
      enableDownload: false,
      backgroundColor: '#222222',
      hideControls: 'share,sound,download,fullScreen,outline',
    };

    for (const script of scripts) {
      const tag = document.createElement('script');
      tag.src = script;
      document.body.appendChild(tag);
    }
  }, []);

  return (
    <div>
      <link
        href="/vendor/dflip/css/dflip.min.css"
        rel="stylesheet"
        type="text/css"
      />
      <link
        href="/vendor/dflip/css/themify-icons.min.css"
        rel="stylesheet"
        type="text/css"
      />

      <script
        src="https://code.jquery.com/jquery-3.7.1.min.js"
        integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo="
        crossOrigin="anonymous"
      ></script>
      <div className="_df_book" id="pdf_embed"></div>
    </div>
  );
};

export async function getServerSideProps(
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<ArchiveEmbedPageProps>> {
  if (typeof context.params?.id !== 'string') {
    return { notFound: true };
  }

  const archivePublication = await getArchivePublicationWithId(
    context.params.id
  );

  if (!archivePublication) {
    return { notFound: true };
  }

  return {
    props: {
      embedUrl: archivePublication.pdfUrl,
    },
  };
}

export default ArchiveEmbed;
