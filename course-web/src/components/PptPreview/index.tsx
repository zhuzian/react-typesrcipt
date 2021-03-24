import {Button, Carousel, PageHeader} from 'antd'
import React, {useState, useEffect} from 'react'
import {Document, Page, Outline} from 'react-pdf'
import {useHistory} from 'react-router'
import {CourseAnnex, newCourseAnnex} from '../../api/course'
import {mockPPT} from '../../api/mock'

import './preview.less'
const PptPreview = () => {
  const [numPages, setNumpages] = useState(0)
  const [pageNumber, setPageNumber] = useState(1)
  const [ppt, setPpt] = useState<CourseAnnex>(newCourseAnnex())

  const history = useHistory()

  useEffect(() => {
    setPpt(mockPPT)
  }, [])

  const onDocumentLoadSuccess = ({numPages}) => {
    console.log('load ppt success')

    setNumpages(numPages)
  }

  const handleItemClick = ({pageNumber}) => {
    console.log(`pageNumber ${pageNumber}`)
    setPageNumber(pageNumber)
  }

  return (
    <div className="center-content">
      <div className="center-content-back">
        <PageHeader onBack={() => history.goBack()} title="返回" />
      </div>

      <div className="pdf-group">
        <div className="pdf-group-header">
          <div className="pdf-group-title">初识人工智能</div>
          <div className="pdf-group-file-type">pdf</div>
          <div className="pdf-group-update-at">2021/3/5</div>
        </div>

        <div className="pdf-content">
          <div className="pdf-side"></div>
          <div className="pdf-container">
            <Document
              className="pdf-container"
              file={ppt.previewURL}
              onLoadSuccess={onDocumentLoadSuccess}
            >
              {/* <Page pageNumber={pageNumber} /> */}

              <Page className="pdf-page" pageNumber={pageNumber} />
            </Document>
          </div>
        </div>
      </div>

      <p>
        Page {pageNumber} of {numPages}
      </p>
      <Button disabled={pageNumber <= 1} onClick={() => setPageNumber(pageNumber - 1)}>
        previous
      </Button>
      <Button disabled={pageNumber >= numPages} onClick={() => setPageNumber(pageNumber + 1)}>
        next
      </Button>
    </div>
  )
}

export default PptPreview
